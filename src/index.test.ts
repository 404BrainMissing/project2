import formValidator from "$lib/formValidator";
import { expect, test } from 'vitest';

test("check if running", async () => {
    const url = await fetch("https://404brainmissing.github.io/project2/");

    expect(url.status).toBe(200);
});
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

test("Returns no error for valid contact number starting with +639 ", () => {
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

