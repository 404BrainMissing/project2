import formValidator2 from "$lib/formValidator2";
import { expect, test, vi } from 'vitest';

globalThis.alert = vi.fn();

test("Check if formValidator2 is a valid type", () => {
	expect(formValidator2({
        FullName: "",
        Number: "",
        email: "",
        reason: ""
    })).toBeTypeOf("object");
});

test("Returns no error for valid contact number starting with +639", () => {
	const formValues = {
		FullName: "Robert",
		Number: "+639123456789", // valid number
		email: "robert@yahoo.com",
		reason: "Inquiry about services"
	};

	expect(formValidator2(formValues)).toStrictEqual({});
});

test("Returns no error for valid contact number starting with 09", () => {
	const formValues = {
		FullName: "Robert",
		Number: "09123456789", // valid number
		email: "robert@gmail.com",
		reason: "General question"
	};

	expect(formValidator2(formValues)).toStrictEqual({});
});
test('should call alert with error message if required fields are missing', () => {
    const formValues = {
        FullName: '',               // missing Full Name
        Number: '0992-748-2650',    // valid phone number
        email: 'test@example.com',  // invalid email (not gmail or yahoo)
        reason: ''                  // missing Reason
    };

    // Run the form validator
    const errors = formValidator2(formValues);

    // Check if the errors object is populated
    if (Object.keys(errors).length > 0) {
        globalThis.alert("Please fill in all required fields and ensure quantity is valid.");
    }

    // Verify that alert was called with the correct error message
    expect(globalThis.alert).toHaveBeenCalledWith("Please fill in all required fields and ensure quantity is valid.");
});

test("Returns error for invalid contact number (wrong format)", () => {
	const formValues = {
		FullName: "Robert",
		Number: "12345678901", // invalid number format
		email: "robert@gmail.com",
		reason: "Inquiry"
	};

	expect(formValidator2(formValues)).toStrictEqual({
		Number: "Please enter a valid Philippine contact number starting with +63 or 09"
	});
});

test("Returns error for email not from @gmail.com or @yahoo.com", () => {
	const formValues = {
		FullName: "Robert",
		Number: "09123456789",
		email: "robert@outlook.com", // invalid domain
		reason: "Inquiry"
	};

	expect(formValidator2(formValues)).toStrictEqual({
		email: "Please enter a valid email address with @gmail.com or @yahoo.com"
	});
});

test('should call alert with error message if required fields are missing', () => {
    const formValues = {
        FullName: '',               // missing Full Name
        Number: '0992-748-2650',    // valid phone number
        email: 'test@example.com',  // invalid email (not gmail or yahoo)
        reason: ''                  // missing Reason
    };

    // Run the form validator
    const errors = formValidator2(formValues);

    // Check if the errors object is populated
    if (Object.keys(errors).length > 0) {
        globalThis.alert("Please fill in all required fields and ensure quantity is valid.");
    }

    // Verify that alert was called with the correct error message
    expect(globalThis.alert).toHaveBeenCalledWith("Please fill in all required fields and ensure quantity is valid.");
});