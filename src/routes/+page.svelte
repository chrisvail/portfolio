<script lang="ts">

    import About from "$lib/components/home/about.svelte";
    import Hero from "$lib/components/home/hero.svelte";
	import ProjectsGrid from "$lib/components/home/projects-grid.svelte";

</script>

<svelte:head>
    <title>Chris Vail's Portfolio</title>
    <meta name="description" content="Welcome to my portfolio, my name is Chris Vail and I am a software engineer specialising in Computer Vision.">
</svelte:head>

<Hero/>
<About/>
<ProjectsGrid/>
