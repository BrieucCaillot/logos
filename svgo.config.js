// svgo.config.js
module.exports = {
	multipass: true, // boolean. false by default
	js2svg: {
		indent: 2, // string with spaces or number of spaces. 4 by default
		multipass: true,
		pretty: true, // boolean, false by default
		removeXMLNS: true,
	},
	plugins: [
		'preset-default',
		'prefixIds',
		{
			name: 'sortAttrs',
			params: {
				xmlnsOrder: 'alphabetical',
			},
		},
	],
}
