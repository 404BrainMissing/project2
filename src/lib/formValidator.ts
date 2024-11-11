// formValidator.ts

interface FormValues {
	fullName: string;
	contactNumber: string;
	address: string;
	typeOfAssistance: string;
	others?: string;
	additionalInfo?: string;
}

const validatePhoneNumber = (phoneNumber: string): string | null => {
	const regex = /^(09\d{9}|\+63\d{10})$/;
	return regex.test(phoneNumber) ? null : "Please enter a valid Philippine contact number starting with +63 or 09";
};

const formValidator = (formValues: FormValues) => {
	let errors: { [key: string]: string } = {};

	// Full Name validation
	if (typeof formValues.fullName !== 'string') {
		errors.fullName = "Full name must be a string";
	} else if (!formValues.fullName) {
		errors.fullName = "Full Name is required";
	} else if (formValues.fullName.length > 255) {
		errors.fullName = "Full name exceeds maximum length of 255 characters";
	}

	// Contact Number validation
	if (typeof formValues.contactNumber !== 'string') {
		errors.contactNumber = "Contact number must be a string";
	} else {
		const phoneError = validatePhoneNumber(formValues.contactNumber);
		if (phoneError) {
			errors.contactNumber = phoneError;
		}
	}

	// Address validation
	if (typeof formValues.address !== 'string') {
		errors.address = "Address must be a string";
	} else if (!formValues.address) {
		errors.address = "Address is required";
	}

	// Type of Assistance validation
	if (typeof formValues.typeOfAssistance !== 'string') {
		errors.typeOfAssistance = "Type of assistance must be a string";
	} else if (!formValues.typeOfAssistance) {
		errors.typeOfAssistance = "Type of Assistance is required";
	} else if (formValues.typeOfAssistance === "others" && !formValues.others) {
		errors.others = "Please specify the assistance needed";
	}

	// Additional Info validation (if present)
	if (formValues.additionalInfo && typeof formValues.additionalInfo !== 'string') {
		errors.additionalInfo = "Additional info must be a string";
	}

	return errors;
};

export default formValidator;
