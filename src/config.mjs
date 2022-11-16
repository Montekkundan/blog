export const SITE = {
	name: 'DevLog | Montek',

	origin: 'https://www.montek.dev/',
	basePathname: '/',
	trailingSlash: false,

	title: 'Devlog | Montek',
	description: 'Devlog is a digital garden of Montek where logs and projects are kept.',

	// googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	// googleSiteVerificationId: '',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'logs', 
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
