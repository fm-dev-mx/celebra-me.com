// src/core/errors/repositoryError.ts
import { BaseError } from './baseError';
import { ErrorCodes } from './errorCodes';

/**
 * RepositoryError class for handling errors in data repositories.
 */
export class RepositoryError extends BaseError {
	/**
	 * Creates a new RepositoryError instance.
	 * @param message - The error message.
	 * @param module - The module name where this error originated.
	 * @param originalError - The original error object, if any.
	 */
	constructor(message: string, module: string, originalError?: unknown) {
		super(message, 500, ErrorCodes.REPOSITORY_ERROR, module, originalError);
	}
}
