import { posts } from "$lib/data/posts"

console.log(posts)
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    posts: posts.slice(0, 5)
  }
}