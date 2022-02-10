import adapter from 'svelte-adapter-github';
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
            adapter: adapter({
                    // default options are shown
                    pages: 'docs',
                    assets: 'docs',
                    domain: null,
                    jekyll: false,
                    fallback: null,
                    precompress: false
            })
    }
};

export default config;
