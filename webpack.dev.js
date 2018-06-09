const { resolve } = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',

  devServer: {
    contentBase: resolve(__dirname, 'public'),
    historyApiFallback: true,
    host: 'localhost',
    publicPath: '/',
    port: 8090,
  },
});
