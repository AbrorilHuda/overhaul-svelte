<script lang="ts">
    export let y;
    type tabsType = {
        name: string
        url: string
    }

    const tabs: tabsType[] = [
        {
        name: 'Project',
        url : '#project'
        },
        {
        name: 'About Me',
        url: '#about'
    }
    ]
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 py-3 flex items-center justify-between border border-solid' + (y > 0 ? 'py-4 bg-slate-950 border-violet-950': 'py-6 bg-transparent border-transparent')}>
    <h1 class="font-medium">
        <b class="font-bold poppins">Abroril Huda</b>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.url} class="duration-200 hover:text-violet-400">
                <p>{tab.name}</p>
            </a>            
        {/each}
    </div>
    <a href="https://github.com"
    target="_blank"
     class="blueShadow relative overflow-hidden px-6 py-2 group rounded-full bg-white text-slate-950">
        <div class="absolute top-0 right-full w-full h-full bg-violet-400 opcity-20 group-hover:translate-x-full z-0 duration-200"></div>
        <h4 class="relative z-9">Get in to Github</h4>
    </a>
</header>