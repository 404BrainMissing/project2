// formValidator2.ts

interface FormValues {
	FullName: string;
	Number: string;
	email: string;
	reason: string;
}

const validatePhoneNumber = (phoneNumber: string): string | null => {
	const regex = /^(09\d{9}|\+63\d{10})$/;
	return regex.test(phoneNumber) ? null : "Please enter a valid Philippine contact number starting with +63 or 09";
};

const validateEmail = (email: string): string | null => {
	// Updated regex to accept only @gmail.com and @yahoo.com
	const regex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/;
	return regex.test(email) ? null : "Please enter a valid email address with @gmail.com or @yahoo.com";
};

const formValidator2 = (formValues: FormValues) => {
	let errors: { [key: string]: string } = {};

	// Full Name validation
	if (!formValues.FullName) {
		errors.FullName = "Full Name is required";
	}

	// Contact Number validation
	const phoneError = validatePhoneNumber(formValues.Number);
	if (phoneError) {
		errors.Number = phoneError;
	}

	// Email validation
	const emailError = validateEmail(formValues.email);
	if (emailError) {
		errors.email = emailError;
	}

	// Reason for Contact validation
	if (!formValues.reason) {
		errors.reason = "Reason for Contact is required";
	}

	return errors;
};

export default formValidator2;
