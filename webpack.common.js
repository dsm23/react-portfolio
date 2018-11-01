const { resolve } = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: [
    './src/main.js'
  ],

  //context: resolve(__dirname, 'src/main.js'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './build'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?/,
        exclude: [/node_modules/, /vendors/],
        loader: 'eslint-loader'
      },
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/octet-stream',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml',
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.LoaderOptionsPlugin({
      test: /\.js?/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      title: 'David Murdoch Portfolio',
      template: './index.ejs',
      inject: 'body'
    }),
    new BundleAnalyzerPlugin()
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    // new CopyWebpackPlugin([{ from: 'vendors', to: 'vendors' }]),
    // new OpenBrowserPlugin({ url: 'http://localhost:8090' }),
    // new webpack.NamedModulesPlugin()
  ]
};

module.exports = config;
