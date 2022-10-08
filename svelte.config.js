import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'$stores': 'src/stores',
			'$stores/*': 'src/stores/*',
			'$utils': 'src/utils',
			'$utils/*': 'src/utils/*',
			'$config': 'src/config',
			'$config/*': 'src/config/*',
		}
	}
};

export default config;
