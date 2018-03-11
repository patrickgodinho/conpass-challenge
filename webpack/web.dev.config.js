const path = require('path');
const parentDir = path.join(__dirname, '../');

module.exports = {
  devtool: 'eval',
  entry: path.join(parentDir, '/src/index.js'),
  output: {
    path: parentDir + 'dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules/],
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
};
