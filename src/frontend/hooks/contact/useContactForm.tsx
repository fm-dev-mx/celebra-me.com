// src/frontend/hooks/contact/useContactForm.tsx

import { useState } from 'react';
import { validateInput } from '@utilities/validateInput';
import { contactFormValidationRules } from '@/core/utilities/contactFormValidationRules';
import { ContactFormFields } from '@/core/interfaces/forms/contactFormFields.interface';
import { apiService } from '@/frontend/services/apiService';
import { ApiResponse } from '@/core/types/api/apiResponse.type';

/**
 * Custom hook to manage contact form state and handlers.
 */
export const useContactForm = () => {
	const initialFormData: ContactFormFields = {
		name: '',
		email: '',
		mobile: '',
		message: '',
	};
	// State to manage the form data with optional fields
	const [formData, setFormData] = useState<Partial<ContactFormFields>>(initialFormData);

	// State to store response messages from the server for user feedback
	const [responseMessage, setResponseMessage] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isRateLimited, setIsRateLimited] = useState(false);
	const [errors, setErrors] = useState<Record<keyof ContactFormFields, string>>(
		{} as Record<keyof ContactFormFields, string>,
	);

	/**
	 * Sets response message and handles rate limiting based on the error status code.
	 * @param error - The API error response.
	 */
	const handleErrorResponse = (error: ApiResponse) => {
		if (!error.success && error.statusCode === 429) {
			setIsRateLimited(true);
			setResponseMessage('Has enviado demasiados mensajes. Intenta más tarde.');
		} else {
			setResponseMessage(error.message || 'Hubo un error. Inténtalo de nuevo.');
		}

		if (!error.success && error.errors) {
			setErrors(error.errors as Record<keyof ContactFormFields, string>);
		}
	};
	/**
	 * Handles form submission.
	 * @param event - The form submission event.
	 */
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		setIsRateLimited(false); // Reset rate limit state on new submission
		setResponseMessage(null); // Clear previous response message

		// Client-side validation
		const validationErrors = validateInput(formData, contactFormValidationRules);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setIsSubmitting(false);
			return;
		}
		setErrors({} as Record<keyof ContactFormFields, string>); // Reset validation errors

		try {
			// Send the form data using the ApiService
			const response: ApiResponse = await apiService.sendContactForm(
				formData as ContactFormFields,
			);

			setResponseMessage(response.message);
			setFormData(initialFormData); // Reset the form fields
		} catch (error) {
			// Handle network or unexpected errors
			handleErrorResponse(error as ApiResponse);
		} finally {
			setIsSubmitting(false);
		}
	};

	/**
	 * Handles form input changes.
	 * @param event - The input change event.
	 */
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target as { name: keyof ContactFormFields; value: string };

		// Update the form data state
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	/**
	 * Handles input field blur event for validation.
	 * @param event - The blur event.
	 */
	const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target as { name: keyof ContactFormFields; value: string };

		// Validate only the field that just lost focus using shared validation rules
		const fieldErrors = validateInput(
			{ [name]: value },
			{ [name]: contactFormValidationRules[name] },
		);

		// Update the error state with any validation errors
		setErrors((prevErrors) => {
			const newErrors = { ...prevErrors };
			if (fieldErrors[name]) {
				newErrors[name] = fieldErrors[name];
			} else {
				delete newErrors[name]; // Remove error if field is valid
			}
			return newErrors;
		});
	};

	/**
	 * Determines the submit button text based on the current state.
	 */
	const getButtonText = () => {
		if (isSubmitting) return 'Enviando...';
		if (isRateLimited) return 'Demasiados intentos';
		return 'Enviar Mensaje';
	};

	return {
		formData,
		errors,
		responseMessage,
		isSubmitting,
		isRateLimited,
		handleSubmit,
		handleInputChange,
		handleBlur,
		getButtonText,
	};
};
