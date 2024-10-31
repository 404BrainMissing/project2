<script>
  // @ts-nocheck
  import '../app.css';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  export let name = "Deployed by Sustainablers";

  // Redirect to /home on mount

</script>
  
  <svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet" />
  </svelte:head>
  
  <slot></slot>


<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F9F1E7;
        padding: 10px;
        border-bottom: 2px solid #426B1F;
        flex-wrap: wrap;
    }
    .title {
        font-weight: bold;
        color: #426B1F;
        margin-left: 10px;
    }
    nav.tabs {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
    }
    nav.tabs a.tab {
        margin: 0 15px;
        color: #000000;
        text-decoration: none;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    nav.tabs a.tab:hover {
        color: #426B1F;
    }
    .basket-button {
        background-color: #426B1F;
        color: #FCF7F7;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    footer {
        background-color: #795D3B;
        color: #FCF7F7;
        text-align: center;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
    }
    @media (max-width: 500px) {
        header {
            flex-direction: column;
            align-items: flex-start;
        }
        nav.tabs {
            justify-content: center;
            width: 100%;
        }
        nav.tabs a.tab {
            flex: 1;
            text-align: center;
            padding: 10px 0;
        }
    }
</style>

<main>
    <header>
        <h1 class="title">World Peas</h1>
        <nav class="tabs">
            <a class="tab" href="/project2/" aria-label="home">Home</a>
            <a class="tab" href="/project2/request" aria-label="shop">Request</a>
            <a class="tab" href="/project2/contact" aria-label="contact">Contact</a>
        </nav>
        <button class="basket-button" aria-label="basket">
            <!-- Basket icon -->
        </button>
    </header>
    <slot />
</main>
<footer>
    {name}
</footer>