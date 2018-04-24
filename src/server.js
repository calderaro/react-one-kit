const html = require('./back/html')
const render = require('./back/render')

const server = require('./back/server')

const babelConfig =  require('./webpack/babel.config')
const postcssConfig =  require('./webpack/postcss.config')
const webpackDevConfig =  require('./webpack/dev.config')
const webpackProdConfig =  require('./webpack/prod.config')

module.exports = {
  html,
  render,
  server,
  babelConfig,
  postcssConfig,
  webpackDevConfig,
  webpackProdConfig
}
