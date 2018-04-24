/* global __dirname, require, module */

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const config = {
  mode: 'production',
  target: 'web',
  externals: [nodeExternals()],
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'reactOneKit.js',
    library: 'reactOneKit',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {test: /(\.jsx|\.js)$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
  ]
}


const client = {
  mode: 'production',
  context: path.join(__dirname, './src/'),
  name: 'client',
  target: 'web',
  entry: path.join(__dirname, './src/front.js'),
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'reactOneKitFront.js',
    library: 'reactOneKitFront',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/,
        options: {
          "presets": ["env", "react"],
          "plugins": [
            "transform-runtime",
            "syntax-dynamic-import",
            "transform-object-rest-spread",
            "babel-plugin-transform-class-properties",
          ],
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
  ]
}

const server = {
  mode: 'production',
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  context: path.join(__dirname, './src/'),
  entry: path.join(__dirname, './src/server.js'),
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'reactOneKitBack.js',
    library: 'reactOneKitBack',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
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
      }
    ]
  }
}

module.exports = [client, server]
