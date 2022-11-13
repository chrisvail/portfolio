<script lang="ts">
    
    import Hamburger from './hamburger.svelte';
    import { slide } from 'svelte/transition'
    import { dark } from '$lib/data/stores/core'

    interface PageLinks {
        name:string,
        url:string,
    }

    let pages:Array<PageLinks> = [
        {
            name: "Home",
            url: "/"
        },
        {
            name:"About",
            url:"/#about"
        },
        {
            name: "Projects",
            url:"/#projects"
        },
    ]

    let currentY:number;
    let previousY: number;
    let clientHeight: number;

    const getDirection = (y:number) => {
        const direction = !previousY || previousY < y ? "down" : "up"
        previousY = y
        return direction
    }

    let open = false
    $: scrollDir = getDirection(currentY)
    $: offscreen = (scrollDir === "down" && currentY > clientHeight * 5) && !(open)
    
    

</script>

<svelte:window bind:scrollY={currentY}/>

<header class="sticky -top-1 ease-out duration-300 translate-y-0 z-50 pb-14" class:motion-safe:-translate-y-full={offscreen} bind:clientHeight>
    <div class="absolute w-full top-0 flex flex-col justify-center py-4 bg-slate-100 dark:bg-zinc-700 dark:bg-opacity-30 bg-opacity-60 backdrop-blur-md backdrop-saturate-150 z-50">
        <div class="flex justify-between max-w-3xl w-full self-center">
            <div class="font-bold text-2xl dark:text-slate-100 flex gap-4 items-center">
                <img class="h-8" src="/icons/logo.svg" alt="logo">
                <a href="/">Chris Vail</a>
            </div>
            
            <Hamburger {open} onClick={() => open = !open} width="30" />
            
            <nav class="hidden md:block">
                <ul class="flex gap-8 text-slate-900 dark:text-slate-200 font-bold">
                    {#each pages as page}
                    <li>
                        <a class="" sveltekit:noscroll href={page.url}>{page.name}</a>
                    </li>
                    {/each}
                    <!-- <li>
                        <button on:click={() => $dark = !$dark}>{$dark ? "Light" : "Dark"} Icon</button>
                    </li> -->
                </ul>
            </nav>
        </div>
        
        {#if open}
        <!-- bg-slate-100 bg-opacity-70 backdrop-blur-md backdrop-saturate-150 z-50 -->
        <nav class="flex w-full relative self-center top-full" transition:slide>
            <ul class="flex flex-col items-center font-bold my-8 gap-8 w-full text-slate-900 dark:text-slate-200 ">
                {#each pages as page}
                    <li>
                        <a href={page.url} class="border-b-2 border-accent-base" on:click={() => open = false} >{page.name}</a>
                    </li>
                    {/each}
                    <!-- <li>
                        <button on:click={() => $dark = !$dark}>{$dark ? "Light" : "Dark"} Icon</button>
                    </li> -->
                </ul>
            </nav>
        {/if}
    </div>
    
</header>