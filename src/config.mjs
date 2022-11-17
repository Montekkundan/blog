export const SITE = {
	name: 'DevLog | Montek',

	origin: 'https://www.montek.dev/',
	basePathname: '/',
	trailingSlash: false,

	title: 'Devlog | Montek',
	description: 'Devlog is a digital garden of Montek where logs and projects are kept.',

	googleAnalyticsId: "G-X1E0CLG4BB", // false or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'W4ApX09AU9mm67lquEC1XXlhOiRJlJlZPeqhG5SIbZA',
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
		pathname: 'log', // empty for /some-post, value for /pathname/some-post
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
