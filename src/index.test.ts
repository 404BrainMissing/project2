import formValidator from "$lib/formValidator";
import { expect, test } from 'vitest';

// URL Accessibility Test
test("check if running", async () => {
    const url = await fetch("https://404brainmissing.github.io/project2/");
    expect(url.status).toBe(200);
});

// Form Validator Type Check
test("Check if form validator is a valid type", () => {
	return expect(formValidator({
        fullName: "",
        address: "",
        typeOfAssistance: "",
		others: "",
        additionalInfo: "",
        contactNumber: ""
    })).toBeTypeOf("object");
});

// Valid Contact Number Tests
test("Returns no error for valid contact number starting with +639", () => {
	const formValues = {
		fullName: "Robert",
		contactNumber: "+639123456789",
		address: "123 Main St",
		typeOfAssistance: "others",
		others: "Car accident",
		additionalInfo: "red car",
	};
	expect(formValidator(formValues)).toStrictEqual({});
});

test("Returns no error for valid contact number starting with 09", () => {
	const formValues = {
		fullName: "Robert",
		contactNumber: "09123456789",
		address: "123 Main St",
		typeOfAssistance: "medical",
		additionalInfo: "",
	};
	expect(formValidator(formValues)).toStrictEqual({});
});

// Missing Required Fields Test
test("Returns error for missing required fields", () => {
	const formValues = {
		fullName: "",
		contactNumber: "",
		address: "",
		typeOfAssistance: "",
		others: "",
		additionalInfo: "",
	};
	expect(formValidator(formValues)).toHaveProperty("fullName", "Full Name is required");
	expect(formValidator(formValues)).toHaveProperty("contactNumber", "Contact number is required");
});

// Invalid Contact Number Format Test
test("Returns error for invalid contact number format", () => {
	const formValues = {
		fullName: "Robert",
		contactNumber: "123456789",
		address: "123 Main St",
		typeOfAssistance: "others",
		others: "",
		additionalInfo: "",
	};
	expect(formValidator(formValues)).toHaveProperty("contactNumber", "Please enter a valid Philippine contact number starting with +63 or 09");
});

// Empty Optional Fields Test
test("Returns no error for empty optional fields", () => {
	const formValues = {
		fullName: "Robert",
		contactNumber: "+639123456789",
		address: "123 Main St",
		typeOfAssistance: "others",
		others: "Specific assistance detail", // Fill with a specific detail if needed
		additionalInfo: "",
	};
	expect(formValidator(formValues)).toStrictEqual({});
});

// Non-String Input Types Test
test("Returns error for non-string input types", () => {
    interface FormValues {
        fullName: string;
        contactNumber: string;
        address: string;
        typeOfAssistance: string;
        others?: string;
        additionalInfo?: string;
    }
    const formValues: FormValues = {
        fullName: "A".repeat(256),
        contactNumber: "+639123456789",
        address: "123 Main St",
        typeOfAssistance: "others",
        others: "Detailed assistance",
        additionalInfo: "",
    };

    expect(formValidator(formValues)).toHaveProperty("fullName", "Full name must be a string");
    expect(formValidator(formValues)).toHaveProperty("additionalInfo", "Additional info must be a string");
});


// Exceeding Max Length Test
test("Returns error for exceeding max length", () => {
	const formValues = {
		fullName: "A".repeat(256),
		contactNumber: "+639123456789",
		address: "123 Main St",
		typeOfAssistance: "others",
		others: "Detailed assistance",
		additionalInfo: "",
	};
	expect(formValidator(formValues)).toHaveProperty("fullName", "Full name exceeds maximum length of 255 characters");
});
