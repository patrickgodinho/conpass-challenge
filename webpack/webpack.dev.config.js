const webpack = require('webpack');
const path = require('path');
const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(__dirname, '../src/index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: 'node_modules',
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
};
