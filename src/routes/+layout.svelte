<script lang="ts">

    import Footer from "$lib/components/layout/footer.svelte";
    import Nav from "$lib/components/layout/nav.svelte";
    import "../app.css"

    import { fly } from "svelte/transition";
    import { page } from '$app/stores';
    import { dark } from '$lib/data/stores/core'
    
    $: refresh = $page.url.pathname;

</script>

<div class="{$dark ? 'dark' : ''}">
    {#key refresh}
    <Nav/>
    <div class="min-h-[100vh] overflow-hidden flex flex-col bg-white dark:bg-zinc-800 dark:text-slate-100 text-slate-700 items-center font-sans -mt-16" in:fly={{duration: 300, y:200, delay:500}} out:fly={{duration: 300, y:-200}}>
            <slot />
        </div>
    {/key}
    <Footer />
</div>