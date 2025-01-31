import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {relative: false},
		paths: {
			base: "/alkendi-academy"
		},
		prerender: {
			handleHttpError: ({ status, path, referrer, referenceType }) => {
			  if (status === 404) {
				console.warn(`404 error on ${path} from ${referrer}`);
				return { ignore: true }; // Ignore missing assets during prerender
			  }
			}
		}
	},
};

export default config;
