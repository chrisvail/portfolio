<script lang="ts">
    export let dark = ""

    interface PageLinks {
        name:string,
        url:string,
    }

    let pages:Array<PageLinks> = [
        {
            name: "Home",
            url: "/",
        },
        {
            name:"About",
            url:"/about",
        },
        // {
        //     name: "Posts",
        //     url:"/#posts",
        // }, 
        {
            name: "Projects",
            url:"/projects",
        },
        // {
        //     name:"Playground",
        //     url:"/playground",
        // }
    ]

</script>

<div class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-zinc-100 dark:bg-zinc-700 bg-opacity-70 backdrop-blur-md backdrop-saturate-150 z-50 py-16 px-2">
    <!-- Main navigation -->
    <section class="border-b-2 dark:border-zinc-600 border-zinc-200 flex flex-col gap-2 py-2">
        {#each pages as page_link}
            <a class="relative flex items-center justify-center h-12 w-12 my-2 mx-auto bg-zinc-400 dark:bg-zinc-500 hover:dark:bg-slate-400 hover:bg-slate-400 rounded-3xl hover:rounded-lg transition-all duration-200 ease-linear cursor-pointer group" href={page_link.url}>
                <img class="h-12" src="/favicon.png" alt="">
                <span class="absolute bg-zinc-300 dark:bg-zinc-500 font-bold text-xs left-16 p-2 rounded-lg transition-transform duration-100 scale-0 group-hover:scale-100 origin-left">{page_link.name}</span>
            </a>
        {/each}
    </section>
    <button on:click={() => dark = dark ? "":"dark"} class="relative flex items-center justify-center h-12 w-12 my-4 mx-auto bg-zinc-400 dark:bg-zinc-500 hover:dark:bg-slate-400 hover:bg-slate-400 rounded-3xl hover:rounded-lg transition-all duration-200 ease-linear cursor-pointer">
        <img class="h-12" src="/favicon.png" alt="">
    </button>
</div>