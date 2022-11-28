<script lang="ts">
    import { icons } from '$lib/data/stores/core'
    import Icons from '$lib/components/core/icons.svelte';
</script>


<div class="flex md:flex-row flex-col md:justify-between md: w-full">
    <div class="xl:w-2/3 md:w-3/5 min-h-96 md:py-8 xl:pl-64 xl:pr-8 xl:px-0 md:px-32 px-8 pt-24 pb-8 flex flex-col md:items-start md:text-left text-center items-center justify-center gap-2">
        <h1 class="text-2xl font-light">Hi, I am</h1>
        <h1 class="text-6xl font-bold -ml-2 pt-0 -mb-2 text-accent-base">Chris Vail</h1>
        <h2 class="text-2xl font-light">Computer Vision Engineer</h2>
        <div class="flex justify-center items-center gap-6 mt-6 ">
            {#each $icons as icon}
                <a target="_blank" rel="noreferrer" class="hover:scale-105 duration-150" href={icon.href} aria-label={icon.name}>
                    <Icons type={icon.icon} style="fill-slate-300 dark:fill-zinc-500"/>
                </a>
            {/each}
        </div>
    </div>
    <div class="md:bg-accent-base flex items-center py-8 md:px-0 sm:px-16 px-8 md:py-0">
        <img class="object-cover xl:h-[90vh] xl:w-auto md:w-[40vw] w-screen aspect-2/3" src="/media/chris-stairs-min.webp" alt="">
    </div>
</div>