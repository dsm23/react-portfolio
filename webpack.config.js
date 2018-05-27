const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
  devtool: 'inline-source-map',
  mode: 'development',

  entry: {
    app: './src/main.js',
  },

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '.'),
    publicPath: '/',
  },

  context: resolve(__dirname, '.'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    historyApiFallback: true,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index'],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)?$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false,
              },
            },
          ],
          publicPath: '../',
        })),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/octet-stream',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.LoaderOptionsPlugin({
      test: /\.(js|jsx)?$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false,
        },
        plugins: ['react-hot-loader/babel'],
      },
    }),
    new HtmlWebpackPlugin({
      title: 'David Murdoch Portfolio',
      template: './index.template',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    // new CopyWebpackPlugin([{ from: 'vendors', to: 'vendors' }]),
    new OpenBrowserPlugin({ url: 'http://localhost:8090' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
