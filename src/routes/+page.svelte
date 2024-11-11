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

  .background-image {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    opacity: 0.2;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: background-image 1s ease-in-out; 
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
  <div 
    class="background-image" 
    style="background-image: url('{images[currentImageIndex]}')"
  ></div>
  <div class="container">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 mb-4">
      Welcome to Emergency Hotline and Disaster Readiness Application
    </h1>
    <h3 class="text-2xl sm:text-lg md:text-2xl font-bold" style="margin-top: 70px;">
      Your safety is our priority!
    </h3>
  </div>
</div>