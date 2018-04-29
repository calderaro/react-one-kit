const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const server = {
  mode: 'production',
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  context: path.join(__dirname, './src/'),
  entry: {
    app: path.join(__dirname, '/src/front/app.js'),
    localStorage: path.join(__dirname, '/src/redux/localStorage.js'),
    history: path.join(__dirname, '/src/router/history.js'),

    html: path.join(__dirname, './src/back/html.js'),
    render: path.join(__dirname, './src/back/render.js'),
    server: path.join(__dirname, './src/back/server.js'),
    routerHelpers: path.join(__dirname, '/src/router/rrv4Helpers.js'),
    babelConfig: path.join(__dirname, './src/webpack/babel.config.js'),
    babelRegister: path.join(__dirname, './src/webpack/babel.register.js'),
    postcssConfig: path.join(__dirname, './src/webpack/postcss.config.js'),
    webpackDevConfig: path.join(__dirname, './src/webpack/dev.config.js'),
    webpackProdConfig: path.join(__dirname, './src/webpack/prod.config.js'),
    connect: path.join(__dirname, '/src/redux/connect.js'),
    form: path.join(__dirname, '/src/fetch/form.js'),
    fetch: path.join(__dirname, '/src/fetch/fetch.js'),
    configureStoreDev: path.join(__dirname, '/src/redux/configureStore.dev.js'),
    configureStore: path.join(__dirname, '/src/redux/configureStore.prod.js')
  },
  output: {
    path: path.join(__dirname, '/lib'),
    filename: '[name].js',
    library: 'reactOneKit',
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

module.exports = server
