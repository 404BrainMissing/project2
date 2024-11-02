<script lang="ts">
	import { Card, Input, Button, Select } from "flowbite-svelte";
	import Label from "flowbite-svelte/Label.svelte";

	let formValues = {
		fullName: "",
		contactNumber: "",
		address: "",
		others: "",
		typeOfAssistance: "",
		additionalInfo: "",
	};
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
				<form class="flex flex-col gap-6">
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
								<option value="medical">Food</option>
								<option value="fire">Water</option>
								<option value="rescue">Oxygen</option>
								<option value="others">Ambulance</option>
								<option value="medical">Medical Aid</option>
								<option value="fire">Fire Fighter</option>
								<option value="rescue">Rescue</option>
								<option value="others">Others</option>
							</Select>
						</div>
					</div>

					<div>
						<Input
							type="text"
							name="others"
							bind:value={formValues.others}
							placeholder="Specify if Other"
							required
						/>
					</div>

					<div class="flex flex-col gap-4">
						<label for="additionalInfo">Additional Information</label>
						<Input
							type="text"
							name="additionalInfo"
							bind:value={formValues.additionalInfo}
							placeholder="Any information that may helpful"
						/>
					</div>

					<div class="flex flex-col sm:flex-row justify-between mt-6">
						<Button color="blue" type="reset">Clear Form</Button>
						<Button type="submit" color="blue">Submit</Button>
					</div>
				</form>
			</Card>
		</div>
	</main>

	
</div>
