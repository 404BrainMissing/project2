<script lang="ts">
	import { Card, Input, Button, Select, Checkbox, Modal } from "flowbite-svelte";
	import Label from "flowbite-svelte/Label.svelte";
	import { BadgeCheckSolid } from 'flowbite-svelte-icons';

	let submitModal = false;
	let formValues = {
		fullName: "",
		contactNumber: "",
		address: "",
		others: "",
		typeOfAssistance: "",
		additionalInfo: "",
	};
	let termsAccepted = false; // Bind this to the checkbox's checked state

	// Reactive statement to toggle "Others" input requirement and clear value if not needed
	$: if (formValues.typeOfAssistance !== 'others') {
		formValues.others = ""; // Clear "Others" input if "Others" is not selected
	}

	function handleFormSubmit(event: Event) {
		if (event.target instanceof HTMLFormElement && event.target.checkValidity()) {
			submitModal = true; // Open modal if form is valid
		}
	}

	// Function to close the modal and reset the form
	function resetForm() {
		submitModal = false;
		formValues = {
			fullName: "",
			contactNumber: "",
			address: "",
			others: "",
			typeOfAssistance: "",
			additionalInfo: "",
		};
		termsAccepted = false; // Uncheck the checkbox
	}
</script>

<style>
	.bg {
		background-color: #03045E;
		margin-top: 50px;
		padding: 20px;
		color: #FFFFFF;
	}
</style>

<div class="bg">
	<h1 class="text-center text-3xl font-bold mt-6">EMERGENCY REQUEST FORM</h1>
	<main class="mx-auto w-full max-w-xl p-8 mt-8 bg-white rounded-lg shadow-md">
		<div class="flex flex-col gap-8">
			<Card size="none">
				<form class="flex flex-col gap-6" on:submit={handleFormSubmit}>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<Label class="mb-2 inline-block">Fullname</Label>
							<Input
								type="text"
								name="fullName"
								bind:value={formValues.fullName}
								placeholder="Input your Fullname"
								required
							/>
						</div>
						<div>
							<Label class="mb-2 inline-block">Contact</Label>
							<Input
								type="text"
								name="contactNumber"
								bind:value={formValues.contactNumber}
								placeholder="Input your Contact Number"
								required
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<Label class="mb-2 inline-block">Address</Label>
							<Input
								type="text"
								name="address"
								bind:value={formValues.address}
								placeholder="Address"
								required
							/>
						</div>
						<div>
							<Label class="mb-2 inline-block">Type of Assistance</Label>
							<Select
								name="typeOfAssistance"
								bind:value={formValues.typeOfAssistance}
								placeholder="Type of Assistance"
								required
							>
								<option disabled selected>Select Type of Assistance</option>
								<option value="food">Food</option>
								<option value="water">Water</option>
								<option value="oxygen">Oxygen</option>
								<option value="ambulance">Ambulance</option>
								<option value="medical">Medical Aid</option>
								<option value="fire">Fire Fighter</option>
								<option value="rescue">Rescue</option>
								<option value="others">Others</option>
							</Select>
						</div>
					</div>

					<div>
						<Label class="mb-2 inline-block">Specify if Other</Label>
						<Input
							type="text"
							name="others"
							bind:value={formValues.others}
							placeholder="Specify if Other"
							disabled={formValues.typeOfAssistance !== 'others'}
							required={formValues.typeOfAssistance === 'others'}
						/>
					</div>

					<div class="flex flex-col gap-4">
						<label for="additionalInfo">Additional Information</label>
						<Input
							type="text"
							name="additionalInfo"
							bind:value={formValues.additionalInfo}
							placeholder="Any information that may be helpful"
						/>
					</div>
					<div>
						<Checkbox class="m-0 space-x-1 rtl:space-x-reverse" bind:checked={termsAccepted} required>
							I agree with the terms and conditions.
						</Checkbox>
					</div>
					<div class="flex flex-col sm:flex-row justify-between mt-6 gap-2">
						<Button color="blue" type="reset">Clear Form</Button>
						<Button type="submit" color="blue">Submit</Button>
					</div>
				</form>
			</Card>
		</div>
	</main>
	<Modal bind:open={submitModal} size="xs" autoclose>
		<div class="text-center">
			<BadgeCheckSolid class="mx-auto mb-4 w-12 h-12 text-black" />
			<h3 class="mb-5 text-lg font-normal text-black ">Please wait for a couple of minutes to give your assistance needed</h3>
			<Button color="blue" on:click={resetForm}>Close</Button>
		</div>
	</Modal>
</div>
