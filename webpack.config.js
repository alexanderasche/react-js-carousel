var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#inline-source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: __dirname,
    filename: 'index.js'
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
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
