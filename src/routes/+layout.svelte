<script>
    import "../app.css";
    import { Button} from 'flowbite-svelte'
    
    // export const prerender = true;
    let menuOpen = false;
</script>
  
  <svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet" />
  </svelte:head>
  
  <slot></slot>
  
  <nav style="background-color: 	#202020;" class="p-4 fixed w-full top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white font-bold text-2xl" style="margin-left: 15px">
        Welcome to my portfolio
      </div>
  
      <div class="space-x-4 hidden lg:flex" style="margin-right: 10px">
        <Button color="light" href="/">Home</Button>
        <Button color="light" href="/request">Request</Button>
        <Button color="light" href="/contact">Contact</Button>
      </div>
  

  
    {#if menuOpen}
      <div class="bg-gray-800 text-white space-y-2 px-4 py-2 lg:hidden">
        <a href="/" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">Home</a>
        <a href="/request" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">request</a>
        <a href="/contact" class="block text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-semibold rounded-lg px-4 py-2 transition duration-200">Contact Me</a>
      </div>
    {/if}
  </nav>
  