const { resolve } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',

  entry: [
    'webpack-dev-server/client?http://localhost:8090',
    'webpack/hot/only-dev-server'
  ],

  devServer: {
    contentBase: resolve(__dirname, 'src'),
    historyApiFallback: true,
    host: 'localhost',
    publicPath: '/',
    port: 8090,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
