<script>
  // @ts-nocheck
  import '../app.css';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
  // Redirect to /home on mount
  let menuOpen = false;
</script>
  
  <svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet" />
  </svelte:head>
  
  <slot></slot>


<nav style="background-color: #FFEF00;" class="p-4 fixed w-full top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Logo Image -->
        <!-- svelte-ignore a11y_missing_attribute -->
        <img src="/project2/logo.png" class="me-3 h-6 sm:h-9" style="margin-left: 50px;" />
        <!-- <img src="/logo.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" style="margin-left: 50px;" /> -->
        <!-- Centered Button Container -->
        <!-- <div class="flex-grow space-x-16 hidden lg:flex" style="margin-left: 480px">
            <a href="/" class="text-primary hover:underline font-bold text-white">HOME</a>
            <a href="/request" class="text-primary hover:underline font-bold text-white">REQUEST</a>
            <a href="/contact" class="text-primary hover:underline font-bold text-white">CONTACTS</a>
        </div> -->

        <div class="flex-grow space-x-16 hidden lg:flex" style="margin-left: 480px">
            <a href="/project2/" class="text-primary hover:underline font-bold text-white">HOME</a>
            <a href="/project2/request" class="text-primary hover:underline font-bold text-white">REQUEST</a>
            <a href="/project2/contact" class="text-primary hover:underline font-bold text-white">CONTACTS</a>
        </div>

        <div class="lg:hidden">
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button on:click={() => (menuOpen = !menuOpen)} class="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>

    {#if menuOpen}
        <!-- <div class="bg-gray-800 text-white space-y-2 px-4 py-2 lg:hidden">
            <a href="/" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">Home</a>
            <a href="/request" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">Request</a>
            <a href="/contact" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">Contact Me</a>
        </div> -->
        <div class="bg-gray-800 text-white space-y-2 px-4 py-2 lg:hidden">
            <a href="/project2/" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">Home</a>
            <a href="/project2/request" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">Request</a>
            <a href="/project2/contact" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">Contact Me</a>
        </div>
    {/if}
</nav>

