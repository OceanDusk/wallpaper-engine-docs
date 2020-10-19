const en = require('../../app_strings/en.json');

module.exports = {
	title: 'Wallpaper Engine - Designer Documentation',
	locales: {
		'/en/': {
			lang: 'en',
			title: en.title,
			description: en.description,
		},
	},
	themeConfig: {
		logo: '/img/wallpaperenginelogo.png',
		nextLinks: true,
		prevLinks: true,
		locales: {
			'/en/': {
				searchPlaceholder: en.searchPlaceholder,
				selectText: en.language_name,
				label: en.language_name,
				ariaLabel: en.language_name,
				sidebar: {
					'/en/scene/': getSceneSidebar('/en/', en.sidebar_overview, en.sidebar_gettingstarted, en.sidebar_effects, en.sidebar_assets, en.sidebar_audio, en.sidebar_particles, en.sidebar_animations, en.sidebar_parallax, en.sidebar_scenescript, en.sidebar_shaders),
					'/en/web/': getWebSidebar('/en/', en.sidebar_overview),
					'/': []
				},
				nav: [
					{ text: en.navbar_scene, link: '/scene/' },
					{ text: en.navbar_web, link: '/web/' }
				]
			},
		}
	},
	plugins: [
		['@vuepress/back-to-top', true],
		['@vuepress/google-analytics', { ga: 'UA-145121163-4' }],
		['vuepress-plugin-redirect', { locales: true } ],
		['vuepress-plugin-smooth-scroll'],
		['sitemap', { hostname: 'https://docs.wallpaperengine.io' } ],
		['robots', {
				host: "https://docs.wallpaperengine.io",
				allowAll: true,      
				sitemap: "/sitemap.xml",
				policies: [
					{
						userAgent: '*',
					}
				]
			},
		],
	]
};

function getSceneSidebar(locale, overviewGroup, gettingStartedGroup, effectsGroup, assetsGroup, audioGroup, particlesGroup, animationsGroup, parallaxGroup, scenescriptGroup, shadersGroup) {
	return [
		{
			title: overviewGroup,
			collapsable: false,
			children: [
				locale + 'scene/',
			]
		},
		{
			title: gettingStartedGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted',
				locale + 'scene/first/effects',
				locale + 'scene/first/assets',
				locale + 'scene/first/properties',
				locale + 'scene/first/publishing',
			]
		},
		{
			title: effectsGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted'
			]
		},
		{
			title: assetsGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted'
			]
		},
		{
			title: audioGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted'
			]
		},
		{
			title: particlesGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted'
			]
		},
		{
			title: animationsGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted'
			]
		},
		{
			title: parallaxGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted'
			]
		},
		{
			title: scenescriptGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted'
			]
		},
		{
			title: shadersGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted'
			]
		}
	]
}

function getWebSidebar(locale, introGroup) {
	return [
		{
			title: introGroup,
			collapsable: false,
			children: [
				locale + 'web/',
			]
		}
	]
}
