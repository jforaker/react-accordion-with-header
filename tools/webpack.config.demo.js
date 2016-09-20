/**
 * For packaging a ready to run demo
 */

'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    __dirname + '/main.js'
  ],

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
      {test: /\.css$/, loaders: ['style', 'css']},
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 2 version',
          'sass?outputStyle=expanded&includePaths[]=' +
          (path.resolve(__dirname, './src'))
        ]
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: './demo'
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
    contentBase: './demo'
  }
};
