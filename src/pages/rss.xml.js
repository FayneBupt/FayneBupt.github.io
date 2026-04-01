import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postPath, sortPosts } from '../utils/posts';

export async function GET(context) {
	const posts = sortPosts(await getCollection('posts', ({ data }) => !data.draft));
	return rss({
		title: 'Fayne Blog',
		description: 'Fayne 的个人博客，记录技术与生活。',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.summary,
			link: `${postPath(post)}/`
		}))
	});
}
