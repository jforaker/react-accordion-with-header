var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/
			},
		]
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},

	output: {
		filename: 'dist/react-accordion-with-header.js',
		libraryTarget: 'umd',
		library: 'ReactAccordionWithHeader'
	},

	plugins: [
		new webpack.optimize.DedupePlugin()
	],

	resolve: {
		extensions: ['', '.jsx', '.js']
	}
};
