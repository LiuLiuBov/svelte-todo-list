import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    paths: {
      base: dev ? '' : '/svelte-todo-list/tree/main/to-do-list' // Replace 'svelte-todo-list' with your repository name
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      strict: false
    })
  }
};
