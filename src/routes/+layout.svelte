<script lang="ts">
  let { children } = $props();  
  import "../app.css";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

  let y = $state(0);
  let innerHeight= $state(0);
  let innerWidth = $state(0);

  function goTop(){
    console.log("go topppp")
    document.body.scrollIntoView()
  }
</script>


<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen pt-6">
  <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10]" + (y > 0 ? "opacity-full pointer-events-auto" : "pointer-events-none")}>
    <button
    onclick={goTop} 
    class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor"
    aria-label="go-top">
      <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
    </button>
  </div>
  <Header y={y}/>
    {@render children()}
  <Footer/>
</div>


<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>