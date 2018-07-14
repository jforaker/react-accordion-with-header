/**
 * For packaging a ready to run demo
 */

'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [__dirname + '/main.js'],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
      { test: /\.css$/, loaders: ['style', 'css'] }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: './dist'
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html'
    })
  ],

  devServer: {
    contentBase: './dist'
  }
};
