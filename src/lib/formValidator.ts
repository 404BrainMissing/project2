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
	if (!formValues.fullName) {
		errors.fullName = "Full Name is required";
	}

	// Contact Number validation
	const phoneError = validatePhoneNumber(formValues.contactNumber);
	if (phoneError) {
		errors.contactNumber = phoneError;
	}

	// Address validation
	if (!formValues.address) {
		errors.address = "Address is required";
	}

	// Type of Assistance validation
	if (!formValues.typeOfAssistance) {
		errors.typeOfAssistance = "Type of Assistance is required";
	} else if (formValues.typeOfAssistance === "others" && !formValues.others) {
		errors.others = "Please specify the assistance needed";
	}

	return errors;
};


export default formValidator;
