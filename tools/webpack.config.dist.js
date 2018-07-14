/**
 * For creating an installable bundle via
 * npm install react-accordion-with-header --save
 */

var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },

  output: {
    filename: 'lib/index.js',
    libraryTarget: 'umd',
    library: 'ReactAccordionWithHeader'
  },

  plugins: [new webpack.optimize.DedupePlugin()],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
