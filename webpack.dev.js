const { resolve } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',

  devServer: {
    contentBase: resolve(__dirname, 'src'),
    historyApiFallback: true,
    host: 'localhost',
    publicPath: '/',
    port: 8090,
    hot: true
  }
});
