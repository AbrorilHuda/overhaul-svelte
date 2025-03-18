<script lang="ts">
	import ArrowRightIcon from "$lib/components/blog/ArrowRightIcon.svelte";
	import PostList from "$lib/components/blog/PostList.svelte";
	export let data;
  console.log(data)
</script> 

<section class="w-full">
    <div class="flex items-center justify-between gap-4 mb-8">
      <h2 class="text-sm font-medium sm:text-base text-zinc-500 dark:text-zinc-400">
        Recently Published
      </h2>
      <a href="/posts" class="flex items-center gap-1 text-sm font-medium text-teal-500"
        >View All <ArrowRightIcon class="w-4 h-4" /></a
      >
    </div>
    <PostList posts={data.posts} />
</section>