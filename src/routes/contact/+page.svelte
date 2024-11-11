<script lang="ts">
	import { Card, Input, Button, Modal, Tabs, TabItem } from "flowbite-svelte";
	import Label from "flowbite-svelte/Label.svelte";
  import * as Icon from 'flowbite-svelte-icons';
  import { BadgeCheckSolid } from 'flowbite-svelte-icons';
	import formValidator2 from "$lib/formValidator2"; 

	let formValues = {
		FullName: "",
		Number: "",
		email: "",
		reason: "",
	};

	let errors: Record<string, string> = {};  
	let showSuccessModal = false; 
	let showErrorModal = false; 

	// Function to handle form submission
	function handleSubmit(event: Event) {
		event.preventDefault();

		// Call the formValidator2 function to validate the form values
		errors = formValidator2(formValues);

		// Debug: Log errors and modal states
		console.log("Errors:", errors);

		// Check if there are validation errors and print the console message
		if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully:", formValues);
			showSuccessModal = true;
			formValues = { FullName: "", Number: "", email: "", reason: "" };
		} else {
			showErrorModal = true;
			console.log("Error modal should now be true:", showErrorModal);
		}
	}
</script>

<!-- svelte-ignore css_unused_selector -->
<style>

    @media (max-width: 640px) {
    .tab-content {
      padding: 1rem; 
    }
  }

  @media (min-width: 641px) {
    .tab-content {
      padding: 2rem; 
    }
  }
	.bg {
		background-color: #03045E;
		margin-top: 20px;
		padding: 20px;
		color: #FFFFFF;
	}
    .bd {
		background-color: #03045E;

		padding: 20px;
		color: #FFFFFF;
	}
</style>

	<!-- Forms -->
<!-- Form -->
<!-- Form -->
<div class="bg min-h-screen flex items-center justify-center">
	<div class="w-full max-w-lg px-4">
		<h1 class="text-center text-3xl font-bold m-px">CONTACT FORM</h1>
		<div class="flex flex-col gap-8 mt-6">
			<Card size="none">
				<form class="flex flex-col gap-8" on:submit={handleSubmit}>
					<!-- Full Name Field -->
					<div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
						<div>
							<Label class="mb-2 inline-block">Full Name</Label>
							<Input
								type="text"
								bind:value={formValues.FullName}
								placeholder="Input your Full Name"
								required
							/>
						</div>
					</div>
					
					<!-- E-mail Field -->
					<div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
						<div>
							<Label class="mb-2 inline-block">E-mail</Label>
							<Input
								type="email"
								bind:value={formValues.email}
								placeholder="email@gmail.com or email@yahoo.com"
								required
							/>
						</div>
					</div>

					<!-- Phone Number Field -->
					<div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
						<div>
							<Label class="mb-2 inline-block">Phone Number</Label>
							<Input
								type="text"
								bind:value={formValues.Number}
								placeholder="09++++++++++"
								required
							/>
						</div>
					</div>

					<!-- Reason for Contact Field -->
					<div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
						<div>
							<Label class="mb-2 inline-block">Reason for Contact</Label>
							<Input
								type="text"
								bind:value={formValues.reason}
								placeholder="Your reason for Contact"
								required
							/>
						</div>
					</div>

					<!-- Form Buttons -->
					<div class="flex flex-col sm:flex-row justify-between mt-6 gap-2">
						<Button color="blue" type="reset" on:click={() => formValues = { FullName: "", Number: "", email: "", reason: "" }}>Clear Form</Button>
						<Button type="submit" color="blue">Submit</Button>
					</div>
				</form>
			</Card>
		</div>
	</div>
</div>

<!-- Modal for Successful Submission -->
<Modal bind:open={showSuccessModal} on:close={() => showSuccessModal = false} size="xs" autoclose>
	<div class="text-center">
    <BadgeCheckSolid class="mx-auto mb-4 w-12 h-12 text-black" />
		<h3 class="mb-5 text-lg font-normal text-black">Form submitted successfully!</h3>
		<p class="text-gray-700 mb-6">Thank you for reaching out. Your safety is our priority.</p>
		<Button on:click={() => showSuccessModal = false} color="blue">Close</Button>
	</div>
</Modal>

<!-- Modal for Errors -->
<Modal bind:open={showErrorModal} on:close={() => showErrorModal = false} size="xs" autoclose>
	<div class="text-center">
		<h3 class="mb-5 text-lg font-normal text-black">Form submission failed</h3>
		<p class="text-gray-700 mb-4">Please correct the following errors:</p>
		<ul class="text-left text-red-500 list-disc list-inside">
			{#each Object.entries(errors) as [field, message]}
				<li>{message}</li>
			{/each}
		</ul>
		<Button on:click={() => showErrorModal = false} color="red">Close</Button>
	</div>
</Modal>

      	<!-- For emergency hotlines -->
    <div>
        <div class="bd">
                <h1 class="text-center text-3xl font-bold m-px flex items-center justify-center gap-2">
                  OLONGAPO CITY EMERGENCY HOTLINES<Icon.PhoneSolid class="w-10 h-10 " />
                </h1>
                   
   <Card size="none" class="mt-2">

    <Tabs class="flex flex-wrap justify-center text-xl text-black">
    <TabItem open title="ALL" class="flex-1 sm:flex-none text-xl text-black">
      <p class="text-xl text-black">
     
        <div class="flex flex-wrap justify-around w-full text-xl text-black">
            
            <div class="border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                
                <p><b>Disaster Risk Reduction and Management Office</b></p>
                <p>Globe: 0917-306-5966</p>
                <p>Smart: 0998-593-7446</p>
                <p>Fire Search and Rescue Tel: 223-6876</p>
            </div>
    
            
            <div class="border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <p><b>Barangay Contacts</b></p>
                <p>New Asinan: 223-5708</p>
                <p>Banicain: 611-0382</p>
                <p>Barretto: 222-4298</p>
                <p>East Bajac-Bajac: 223-8350</p>
                <p>East Tapinac: 223-5314</p>
                <p>Gordon Heights: 223-5497</p>
                <p>New Kababae: 222-7828</p>
                <p>Kalaklan: 224-6983</p>
                <p>New Kalalake: 222-3964</p>
                <p>Mabayuan: 602-3200</p>
                <p>New Cabalan: 224-5418</p>
                <p>New Ilalim: 602-0328</p>
                <p>Old Cabalan: 603-1700</p>
                <p>Pag-asa: 222-8037 / 0948-413-2993</p>
                <p>Sta. Rita: 222-9225</p>
                <p>West Bajac-Bajac: 222-5173</p>
                <p>West Tapinac: 223-3434</p>
            </div>
    
      
            <div class="border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <p><b>Police Stations</b></p>
                <p>OCPO: 222-5731</p>
                <p>Station 1 (Triangle): 222-5101 / 0918-576-3537</p>
                <p>Station 2 (New Kababae): 222-1092 / 0998-598-5549</p>
                <p>Station 3 (Magsaysay): 222-1908 / 0998-598-5561</p>
                <p>Station 4 (New Cabalan): 223-0026 / 0998-598-5567</p>
                <p>Station 5 (Sta. Rita): 222-0984 / 0998-598-5567</p>
                <p>Station 6 (Barretto): 223-7846</p>
                <p>SAF/TOC: 0907-554-9053 / 0919-245-0666</p>
                <p>SOCO: 602-4444</p>
                <p>PNP Maritime Group: 0998-594-0246</p>
                <p>Philippine Coast Guard: 0998-585-8197</p>
                <p>Philippine Navy (San Antonio): 0917-882-2347</p>
                <p>BJMP 164: 602-7330</p>
            </div>
    
      
            <div class="border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <p><b>Additional Contacts</b></p>
                <p>BFP Olongapo: 610-9114 / 223-1415</p>
                <p>City Hall: 611-4800</p>
                <p>PLDT Olongapo: 0939-908-7828 / 0919-0620-799</p>
                <p>Red Cross Olongapo: 222-2181 / 0917-889-2733</p>
                <p>OTMPS: 611-4188 / 0928-917-8420</p>
                <p>Subic Water: 252-2960</p>
                <p>DOH: 961-652-4658</p>
            </div>
            
            <div class="border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <p><b>Additional Contacts</b></p>
                <p>NGCP: 223-3272</p>
                <p>City Sports: 223-5906 / 956-8028</p>
                <p>CSSU JLGHM: 602-1229</p>
                <p>OLLMC: 602-2906</p>
                <p>Social Development Center: 223-1193</p>
                <p>Wildlife: 223-762 / 602-4307</p>
                <p>ESMO: 223-9346 / 602-7330</p>
                <p>CSWDO: 611-4828</p>
                <p>OEDC: 223-2401 / 222-0103 / 222-0089</p>
                <p>Alternative Contacts: 0920-974-8462 / 0917-861-5020</p>
            </div>
            
        </div>
    </TabItem>
    <TabItem title="Disaster Risk Reduction and Management Office" class="flex-1 sm:flex-none">
      <p class="text-xl text-black">
        <div class="text-center text-xl text-black">
            <p class="mt-4"><b>Disaster Risk Reduction and Management Office</b></p>
            <p>Globe: 0917-306-5966</p>
            <p>Smart: 0998-593-7446</p>
            <p>Fire Search and Rescue Tel: 223-6876</p>
            
            </div>

 
    </TabItem>
    <TabItem title="Barangay Contacts" class="flex-1 sm:flex-none">
      <p class="text-xl text-black">
        <div class="text-xl text-black text-center">
            <p><b>Barangay Contacts</b></p>
            <p>New Asinan: 223-5708</p>
            <p>Banicain: 611-0382</p>
            <p>Barretto: 222-4298</p>
            <p>East Bajac-Bajac: 223-8350</p>
            <p>East Tapinac: 223-5314</p>
            <p>Gordon Heights: 223-5497</p>
            <p>New Kababae: 222-7828</p>
            <p>Kalaklan: 224-6983</p>
            <p>New Kalalake: 222-3964</p>
            <p>Mabayuan: 602-3200</p>
            <p>New Cabalan: 224-5418</p>
            <p>New Ilalim: 602-0328</p>
            <p>Old Cabalan: 603-1700</p>
            <p>Pag-asa: 222-8037 / 0948-413-2993</p>
            <p>Sta. Rita: 222-9225</p>
            <p>West Bajac-Bajac: 222-5173</p>
            <p>West Tapinac: 223-3434</p>
        </div>

    </TabItem>
    <TabItem title="Police Stations"  class="flex-1 sm:flex-none text-black">
        <p class="text-xl text-black">
            <div class="text-xl text-black text-center">
            <p><b>Police Stations</b></p>
            <p>OCPO: 222-5731</p>
            <p>Station 1 (Triangle): 222-5101 / 0918-576-3537</p>
            <p>Station 2 (New Kababae): 222-1092 / 0998-598-5549</p>
            <p>Station 3 (Magsaysay): 222-1908 / 0998-598-5561</p>
            <p>Station 4 (New Cabalan): 223-0026 / 0998-598-5567</p>
            <p>Station 5 (Sta. Rita): 222-0984 / 0998-598-5567</p>
            <p>Station 6 (Barretto): 223-7846</p>
            <p>SAF/TOC: 0907-554-9053 / 0919-245-0666</p>
            <p>SOCO: 602-4444</p>
            <p>PNP Maritime Group: 0998-594-0246</p>
            <p>Philippine Coast Guard: 0998-585-8197</p>
            <p>Philippine Navy (San Antonio): 0917-882-2347</p>
            <p>BJMP 164: 602-7330</p>
        </div>
    </TabItem>
    
    <TabItem title="Additional Contact" class="flex-1 sm:flex-none text-2xl text-black">
        <p class="text-sm text-black dark:text-gray-400">
            <div class="text-xl text-black dark:text-gray-900 text-center">
            <p><b>Additional Contacts</b></p>
            <p>BFP Olongapo: 610-9114 / 223-1415</p>
            <p>City Hall: 611-4800</p>
            <p>PLDT Olongapo: 0939-908-7828 / 0919-0620-799</p>
            <p>Red Cross Olongapo: 222-2181 / 0917-889-2733</p>
            <p>OTMPS: 611-4188 / 0928-917-8420</p>
            <p>Subic Water: 252-2960</p>
            <p>DOH: 961-652-4658</p>
            <p>NGCP: 223-3272</p>
            <p>City Sports: 223-5906 / 956-8028</p>
            <p>CSSU JLGHM: 602-1229</p>
            <p>OLLMC: 602-2906</p>
            <p>Social Development Center: 223-1193</p>
            <p>Wildlife: 223-762 / 602-4307</p>
            <p>ESMO: 223-9346 / 602-7330</p>
            <p>CSWDO: 611-4828</p>
            <p>OEDC: 223-2401 / 222-0103 / 222-0089</p>
            <p>Alternative Contacts: 0920-974-8462 / 0917-861-5020</p>
        </div>

      </TabItem>

  </Tabs>
  </Card>
</div>
</div>