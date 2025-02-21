<script>
import { t, locale, locales } from "$lib";
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
             <a href="#aku" class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-4 py-3 group rounded-full bg-white text-slate-950 cursor-pointer">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opcity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
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
    </section>
</main>