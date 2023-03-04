<script lang="ts">

    import Heading from "$lib/components/projects/heading.svelte";
    import type { Image, Project } from "$lib/data/core-types";

    export let project:Project


</script>

<section class="pt-2">
    <Heading level={1} content={project.title} />
    <div class="flex justify-center font-light text-sm text-slate-500 dark:text-slate-200 gap-4 -mt-4">
        {#each project.tags as tag}
            <p class="capitalize font-normal" >{tag.replaceAll("-", " ")}</p>
        {/each}
    </div>
    <img class="pb-8 py-8" src="{project.featuredImage.src}" alt="{project.featuredImage.alt}">
</section>