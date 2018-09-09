// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: '[name].css',
  //     chunkFilename: '[id].css',
  //   }),
  // ],

  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         MiniCssExtractPlugin.loader,
  //         'css-loader',
  //       ],
  //     },
  //   ],
  // },
});
