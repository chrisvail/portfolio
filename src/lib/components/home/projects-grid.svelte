<script lang="ts">

    import { projects } from "$lib/data/stores/projects"
	import ProjectCard from "../cards/project-card.svelte";

</script>

<section id="projects" class="max-w-5xl w-full flex flex-col justify-center xl:px-0 md:px-16 px-4 py-32">
    <h2 class="text-6xl font-bold text-accent-base dark:text-accent-base text-center pb-8">Projects</h2>
    <!-- <p class="w-full max-w-3xl self-center pb-16 font-light">Here's a curated list of some of the projects I've for fun (and profit)</p> -->
    <div class="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-16">
        {#each $projects as proj}
            <ProjectCard data={proj} />
        {/each}
    </div>
</section>