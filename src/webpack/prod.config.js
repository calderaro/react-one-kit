const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const babelWebConfig = require('./babel.config.js')
const babelNodeConfig = require('./babel.node.config.js')
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
    ],
    module: {
      rules: [
        {test: /\.js$/, loader: 'babel-loader', include: projectPath, options: babelWebConfig},
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
    },
    resolveLoader: {
      modules: [path.resolve(path.join(__dirname, '../../node_modules'))]
    },
    resolve: {
      alias: {
        'react': path.join(__dirname, '../../node_modules/react'),
        'redux': path.join(__dirname, '../../node_modules/redux'),
        'react-hot-loader': path.join(__dirname, '../../node_modules/react-hot-loader'),
        'webpack-hot-middleware': path.join(__dirname, '../../node_modules/webpack-hot-middleware'),
        'babel-loader': path.join(__dirname, '../../node_modules/babel-loader'),
        'react-router-dom': path.join(__dirname, '../../node_modules/react-router-dom'),
        'react-router': path.join(__dirname, '../../node_modules/react-router'),
        'global': path.join(__dirname, '../../node_modules/global'),
        'lodash': path.join(__dirname, '../../node_modules/lodash'),
        'babel-runtime': path.join(__dirname, '../../node_modules/babel-runtime'),
        'serialize-javascript': path.join(__dirname, '../../node_modules/serialize-javascript')
      }
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
        {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/, options: babelNodeConfig},
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
    },
    resolveLoader: {
      modules: [path.resolve(path.join(__dirname, '../../node_modules'))]
    },
    resolve: {
      alias: {
        'react': path.join(__dirname, '../../node_modules/react'),
        'redux': path.join(__dirname, '../../node_modules/redux'),
        'react-hot-loader': path.join(__dirname, '../../node_modules/react-hot-loader'),
        'webpack-hot-middleware': path.join(__dirname, '../../node_modules/webpack-hot-middleware'),
        'babel-loader': path.join(__dirname, '../../node_modules/babel-loader'),
        'react-router-dom': path.join(__dirname, '../../node_modules/react-router-dom'),
        'react-router': path.join(__dirname, '../../node_modules/react-router'),
        'global': path.join(__dirname, '../../node_modules/global'),
        'lodash': path.join(__dirname, '../../node_modules/lodash'),
        'babel-runtime': path.join(__dirname, '../../node_modules/babel-runtime'),
        'serialize-javascript': path.join(__dirname, '../../node_modules/serialize-javascript')
      }
    }
  }

  return [client, server]
}
