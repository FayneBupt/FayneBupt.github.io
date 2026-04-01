import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		summary: z.string(),
		tags: z.array(z.string()).default([]),
		aiGenerated: z.boolean().default(false),
		draft: z.boolean().default(false),
		updated: z.date().optional()
	})
});

export const collections = { posts };
