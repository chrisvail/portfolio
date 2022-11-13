<script lang="ts">
    import Icon from "../core/icons.svelte";
    import { icons } from '$lib/data/stores/core'
    

</script>

<footer class="w-full dark:bg-black bg-zinc-800 text-zinc-200 text-sm min-h-32 flex justify-center">
    <div class="max-w-3xl w-full flex flex-col justify-between self-center gap-4 py-8">
        <p class="text-center">Find me on:</p>
        <div class="flex justify-center items-center gap-4 -mt-2">
            {#each $icons as icon}
                <a target="_blank" rel="noreferrer" class="hover:scale-105 duration-150" href={icon.href}>
                    <Icon type={icon.icon} style="fill-white"/>
                </a>
            {/each}
        </div>
        <p class="text-center">All rights reserved Chris Vail 2022</p>
    </div>
</footer>