<script lang="ts">

    import Content from "$lib/components/projects/content.svelte";
	import ProjectHeader from "$lib/components/projects/project-header.svelte";
	import type { Component, Project } from "$lib/data/core-types";
	import { projects } from "$lib/data/stores/projects";

    export let data: {
        project:Project,
        projectContent:Component[]
    };

    // console.log(data)

</script>

<svelte:head>
    <title>Chris Vail: {data.project.title}</title>
    <meta name="description" content={data.project.summary}>
</svelte:head>

<article class="w-full max-w-4xl self-center py-24 px-4 md:px-16 flex flex-col">
    <ProjectHeader project={data.project}/>
    <Content components={data.projectContent} />
</article>