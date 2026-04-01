// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://faynebupt.github.io',
	integrations: [sitemap()],
	output: 'static',
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true
		}
	}
});
