<script lang="ts">

    import type { Project } from "$lib/data/core-types";


    export let previousPost: Project;
    export let nextPost: Project

</script>

<div class="flex sm:flex-row flex-col justify-between items-center gap-8 my-16 font-bold">
    {#if previousPost}
        <a class="flex flex-col sm:text-left text-center" href={"/posts/" + previousPost.slug}>
            <span>Previous Post</span> 
            <span class="text-sm font-light text-gray-500">{previousPost.title}</span>
        </a>
    {:else}
        <a class="disabled text-gray-400 font-light sm:text-left text-center" href="/">Previous Post</a>           
    {/if}

    {#if nextPost}
        <a class="flex flex-col sm:text-right text-center" href={"/posts/" + nextPost.slug}>
            <span>Next Post</span> 
            <span class="text-sm font-light text-gray-500 capitalize">{nextPost.title}</span>
        </a>
    {:else}
        <a class="disabled text-gray-400 font-light sm:text-right text-center" href="/">Next Post</a>           
    {/if}
</div>

<style>

    .disabled {
        pointer-events: none;
        cursor: default;
    }

</style>