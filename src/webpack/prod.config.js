var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const babelConfig = require('./babel.config.js')
const postcssConfig = require('./postcss.config.js')

module.exports = function createWebpackProdConfig (props) {
  const {projectPath, clientEntryPath, clientOutputPath, serverEntryPath, serverOutputPath, api} = props

  const client = {
    mode: 'production',
    context: projectPath,
    name: 'client',
    entry: clientEntryPath,
    output: {
      filename: '[name].js',
      path: clientOutputPath,
      publicPath: '/static/production/'
    },
    optimization: {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[name].css"
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'target': JSON.stringify('production'),
          'NODE_ENV': JSON.stringify('production'),
          'targetenv': JSON.stringify('browser'),
          'api': JSON.stringify(api)
        }
      }),
      //new BundleAnalyzerPlugin()
    ],
    module: {
      rules: [
        {test: /\.js$/, loader: 'babel-loader', include: projectPath, options: babelConfig},
        {test: /\.(css)$/,
            loader: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                query: {minimize: true, modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]'}
              },
              {loader: 'postcss-loader', options: postcssConfig}
            ]
        }
      ]
    }
  }

  const server = {
    mode: 'production',
    name: 'server',
    target: 'node',
    externals: [nodeExternals()],
    context: projectPath,
    entry: serverEntryPath,
    output: {
      filename: 'server.routes.js',
      path: serverOutputPath,
      libraryTarget: 'commonjs2',
      publicPath: '/build/production/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'target': JSON.stringify('production'),
          'NODE_ENV': JSON.stringify('production'),
          'targetenv': JSON.stringify('server'),
          'api': JSON.stringify(props.api)
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/,
          options: {
            'presets': ['env', 'react'],
            'plugins': [
                'transform-runtime',
                'dynamic-import-node',
                'transform-object-rest-spread',
                'babel-plugin-transform-class-properties',
              ],
          }
        },
        { test: /\.(css)$/,
          use: [
            {
              loader: 'css-loader/locals',
              query: {modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]'}
            },
            {loader: 'postcss-loader', options: postcssConfig}
          ]
        }
      ]
    }
  }
  return [client, server]
}
