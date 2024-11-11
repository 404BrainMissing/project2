<script>
  let images = [
    './Ambulance.png',
    './Boat.png',
    './DisasterFoodTruck.png',
    './Firetruck.png'
  ];
  let currentImageIndex = 0;

  // Change background image every 4 seconds
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 4000);
</script>

<style>
  .body {
    background-color: #03045E;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    overflow: hidden;
  }

  
  .container {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 2rem;
  }

  h1, h3 {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
</style>

<div class="body">
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div 
  class="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 scale-[0.8] max-w-full max-h-full opacity-20 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out"
  style="background-image: url('{images[currentImageIndex]}')"
/>

  <div class="container">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 mb-4">
      Welcome to Emergency Hotline and Disaster Readiness Application
    </h1>
    <h3 class="text-2xl sm:text-lg md:text-2xl font-bold" style="margin-top: 70px;">
      Your safety is our priority!
    </h3>
  </div>
</div>