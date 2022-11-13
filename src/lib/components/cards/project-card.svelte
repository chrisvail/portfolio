<script lang="ts">
    
    import type { Project } from "$lib/data/core-types";
    import { goto } from '$app/navigation'

    export let data: Project;
    
    const contentStyle = "px-8 pb-8 text-sm"

</script>



<article on:click={() => goto(`/${data.slug}`)} on:keydown={() => {}} class="rounded-lg shadow-xl overflow-hidden hover:scale-105 duration-150 flex flex-col dark:bg-zinc-700 dark:text-white dark:shadow-zinc-900 cursor-pointer">
    <div class="" href="/{data.slug}">
        <img class="md:w-full md:h-full aspect-16/9 object-cover" src={data.featuredImage.src} alt={data.featuredImage.alt}>
    </div>
    <div href="/{data.slug}" class="flex flex-col justify-center md:col-span-4 col-span-6 md:mt-0 pt-4 {contentStyle}">
        <div class="">
            <h3 class="md:text-3xl text-2xl font-black capitalize ">{data.title}</h3>
            <div class="flex flex-wrap gap-x-4">
                {#each data.tags as tag}
                    <p class="flex text-gray-400 dark:text-zinc-300 text-sm capitalize">{tag.replace("-", " ")}</p>
                {/each}
            </div>
            <p class="mt-4">{data.summary}</p>
        </div>
    </div>
</article>