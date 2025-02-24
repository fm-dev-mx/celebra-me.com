// src/backend/middlewares/loggerMiddleware.ts

import { Handler } from '@/core/types/api/handlers.type';
import { logError, logInfo } from '@/backend/services/logger';
import { maskIpAddress } from '@/backend/utilities/dataSanitization';
import { getErrorMessage } from '@utilities/errorUtils';

const MODULE_NAME = 'LoggerMiddleware';

/**
 * Logs the HTTP method, URL, and masked client IP for incoming requests.
 * @param handler - The next handler function to call after logging the request details.
 * @returns A new handler function with logging applied.
 */
export function loggerMiddleware(handler: Handler): Handler {
	return async (context): Promise<Response> => {
		const { request, clientIp, requestId } = context;
		const method = request.method;
		const url = request.url;
		const maskedClientIp = maskIpAddress(clientIp || '');

		try {
			logInfo({
				message: `Request: ${method} ${url}`,
				module: MODULE_NAME,
				meta: {
					event: 'request_received',
					request: {
						requestId: requestId || 'N/A',
						method,
						url,
						clientIp: maskedClientIp,
					},
				},
			});
		} catch (error: unknown) {
			logError({
				message: 'LoggerMiddleware error',
				module: MODULE_NAME,
				meta: {
					event: 'request_received_error',
					error: getErrorMessage(error),
					request: {
						requestId: requestId || 'N/A',
						method,
						url,
						clientIp: maskedClientIp,
					},
					immediateNotification: true,
				},
			});
		}

		return handler(context);
	};
}
