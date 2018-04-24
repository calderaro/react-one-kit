var path = require('path')
var webpack = require('webpack')
const babelConfig = require('./babel.config.js')
const postcssConfig = require('./postcss.config.js')

module.exports = function createWebpackDevConfig (props) {
  const {projectPath, clientEntryPath, clientOutputPath, api} = props

  return {
    mode: 'development',
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      clientEntryPath
    ],
    output: {
      path: clientOutputPath,
      filename: '[name].js',
      publicPath: '/static/development/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
          'target': JSON.stringify('development'),
          'targetenv': JSON.stringify('browser'),
          'api': JSON.stringify(api)
        }
      })
    ],
    module: {
      rules: [
        {test: /\.js$/, loader: 'babel-loader', include: projectPath, options: babelConfig},
        {test: /\.(css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' }
            },
            {loader: 'postcss-loader', options: postcssConfig}
          ]
        }
      ]
    }
  }
}
