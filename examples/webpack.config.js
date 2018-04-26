var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#inline-source-map',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      { 
        test: /\.(png|jpg|gif|svg)$/,
        use: "url-loader" 
      }
    ]
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
