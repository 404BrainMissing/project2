<script lang="ts">
	import { Card, Input, Button, Select } from "flowbite-svelte";
	import Label from "flowbite-svelte/Label.svelte";
    import { Tabs, TabItem, TimelineItem,} from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
	let formValues = {
		FullName: "",
		Number: "",
		email: "",
		reason: "",

	};
</script>

<style>
	.bg {
		background-color: #03045E;
		margin-top: 30px;
		padding: 20px;
		color: #FFFFFF;
	}
    .bd {
		background-color: #03045E;
		margin-top: 0px;
		padding: 20px;
		color: #FFFFFF;
	}
</style>

<div class="bg min-h-screen flex items-center justify-center">
    
	<div class="w-full max-w-lg px-4">
		<h1 class="text-center text-3xl font-bold mt-6">CONTACT FORM</h1>

		<div class="flex flex-col gap-8 mt-6">
			<Card size="none">
				<form class="flex flex-col gap-8">
					<!-- Personal Information Section -->
					<div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
						<div>
							<Label class="mb-2 inline-block ">Full Name</Label>
							<Input
								type="text"
								name="fullName"
								bind:value={formValues.FullName}
								placeholder="Input your Full Name"
								required
							/>
						</div>
					</div>

					<!-- Address and Assistance Type Section -->
					<div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
						<div>
							<Label class="mb-2 inline-block">E-mail</Label>
							<Input
								type="text"
								name="address"
								bind:value={formValues.email}
								placeholder="email@gmail.com or email@yahoo.com"
								required
							/>
						</div>
					</div>

                    <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
						<div>
							<Label class="mb-2 inline-block">Phone Number</Label>
							<Input
								type="text"
								name="contactNumber"
								bind:value={formValues.Number}
								placeholder="09++++++++++"
								required
							/>
						</div>
					</div>

                    <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
						<div>
							<Label class="mb-2 inline-block">Reason for Contact</Label>
							<Input
								type="text"
								name="others"
								bind:value={formValues.reason}
								placeholder="Your reason for Contact"
								required
							/>
						</div>
					</div>

					<!-- Form Buttons -->
					<div class="flex flex-col sm:flex-row justify-between mt-6 gap-4 ">
						<Button color="blue" type="reset">Clear Form</Button>
						<Button type="submit" color="blue" >Submit <svg class="w-[20px] h-[20px] text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                          </svg>
                          </Button>
					</div>
				</form>
			</Card>
		
	</div>

</div>

</div>


    <div>
        <div class="bd">
            <div>
                <h1 class="text-center text-3xl font-bold mt-6">OLONGAPO CITY EMERGENCY HOTLINES</h1>
                <Card size="none">
                    <Tabs tabStyle="full" defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700">
                    
                        <div class="flex flex-wrap justify-around w-full">
                                <!-- Disaster Risk Reduction and Management Office Section -->
                                <div class="border rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <p class="text-sm text-gray-500 dark:text-gray-400"><b>ALL:</b></p>
                                    <p><b>Disaster Risk Reduction and Management Office</b></p>
                                    <p>Globe: 0917-306-5966</p>
                                    <p>Smart: 0998-593-7446</p>
                                    <p>Fire Search and Rescue Tel: 223-6876</p>
                                </div>
                        
                                <!-- Barangay Contacts Section -->
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
                        
                                <!-- Police Stations Section -->
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
                        
                                <!-- Additional Contacts Section -->
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
                    
                        <!-- The rest of your TabItems can follow a similar responsive structure. -->
                    </Tabs>
                </Card>
            </div>
        </div>
    </div>
  