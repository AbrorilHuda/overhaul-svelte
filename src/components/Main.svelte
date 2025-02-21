<script>
import { t, locale, locales } from "$lib";
import Step from "../components/Step.svelte"
import steps from "./util/step"
import benefits from "./util/benefit";

let titleArray = $derived($t("home.title")) 
</script>


<main class="flex flex-col flex-1 p-4 ">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                {titleArray[0]} <span class="poppins text-vilet-400">Abroril</span> Huda <br/> Full Stack
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">{$t("home.description")}</p>
           <div class="flex">
            <select class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-2 py-2 group rounded-full bg-white text-slate-950 cursor-pointer hover:bg-violet-500"
            bind:value={$locale} >
            {#each locales as l}
                <option class="relative z-9" value={l}>{l}</option>
            {/each}
            </select>
             <a href="#resume" class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-4 py-3 group rounded-full bg-white text-slate-950 cursor-pointer">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opcity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">Get Resume &rarr;</h4>
             </a>
           </div>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src="img/foto.png" alt="profile anime" class="object-cover z-[2] max-h-[70vh]"/>
        </div>
    </section>


    <!-- project -->
    <section id="project" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeveavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curios to <span class="poppins text-violet-400">see</span> my work
            </h3>
        </div>
        <a
        href="https://youtube.com/@dempotimurcode"
        target="_blank"
        class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
        <i class="fa-regular fa-circle-play"></i>
        <p>Watch go youtube</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        {#each steps as step}
        <Step step={step}>
            <p>
                {@html step.description}
            </p>
        </Step>
        {/each}
        
    </div>
    </section>

    <!-- about -->
    <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
>
    <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
    <div
        class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
        <h6 class="text-large sm:text-xl md:text-2xl">
            Want to know more?
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            A bit <span class="poppins text-violet-400">about</span> me.
        </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
        I am  AbrorDc
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            <div class="flex flex-col gap-2 mx-auto">
                <p class="text-center italic">"{$t("main.quote")}"</p>
            </div>
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p
                    class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                >
                    0{index + 1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
            </div>
        {/each}
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
        <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto">So why not invest?</p>
</section>
</main>