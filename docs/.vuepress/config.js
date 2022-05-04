module.exports = {
  lang: 'en-US',
  title: 'NSSDA Docs',
  description: 'Documentation site for NSSDA projects',
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/guide' },
			{ text: 'NSSDA', link: 'https:nssda-ui.herokuapp.com' }
		],
		sidebar: [
			{
				title: 'Components',
				path: '/components',
				collapsable: false,
				children: [
					{
						title: 'bio-preview-card', collapsable: false, path: '/components/bio-preview-card'
					}
				]
			}
		]
	}
}