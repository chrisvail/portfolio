<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/core/button.svelte";
</script>

<div class="h-screen flex flex-col items-center justify-center gap-2 self-center max-w-4xl">
    <h1 class="text-2xl text-slate-600 dark:text-zinc-300 font-light">Looks like we encountered an error</h1>
    <h1 class="text-6xl font-bold -ml-2 py-2 text-accent-base">{$page.status}: {$page.error.message}</h1>
    <h2 class="text-2xl text-slate-600 dark:text-zinc-300 font-light">Guess you shouldn't hire me for webdev</h2>
    <p class="text-sm text-slate-400 dark:text-zinc-500 -mt-2">...or maybe you're in the wrong place?</p>
    <Button type="link" href="/" style="my-8">Go Home</Button>
</div>