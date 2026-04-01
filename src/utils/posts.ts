import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'posts'>;

export const sortPosts = (posts: BlogPost[]) =>
	posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

export const postPath = (post: BlogPost) => `/blog/${post.id.replace(/\.md$/, '')}`;

export const formatDate = (value: Date) =>
	new Intl.DateTimeFormat('zh-CN', { dateStyle: 'long' }).format(value);

export const readingTime = (body: string) => `${Math.max(1, Math.ceil(body.length / 450))} 分钟阅读`;

export const groupTags = (posts: BlogPost[]) => {
	const tagMap = new Map<string, number>();
	for (const post of posts) {
		for (const tag of post.data.tags) {
			tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
		}
	}
	return [...tagMap.entries()]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => b.count - a.count);
};

export const groupPostsByYear = (posts: BlogPost[]) => {
	const yearMap = new Map<string, BlogPost[]>();
	for (const post of posts) {
		const year = String(new Date(post.data.date).getFullYear());
		const list = yearMap.get(year) ?? [];
		list.push(post);
		yearMap.set(year, list);
	}
	return [...yearMap.entries()].map(([year, list]) => ({
		year,
		posts: sortPosts(list)
	}));
};
