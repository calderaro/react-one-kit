const html = require('./back/html')
const render = require('./back/render')
const server = require('./back/server')

const fetch = require('./fetch/')
const form = require('./fetch/form')

const app = require('./front/app')

const configureStore = require('./redux/configureStore.prod')
const configureStoreDev =  require('./redux/configureStore.dev')
const connect =  require('./redux/connect')
const localStorage =  require('./redux/localStorage')

const history =  require('./router/history')
const routerHelpers =  require('./router/rrv4Helpers')

const babelConfig =  require('./router/babel.config')
const postcssConfig =  require('./router/postcss.config')
const webpackDevConfig =  require('./router/dev.config')
const webpackProdConfig =  require('./router/prod.config')


module.exports {
  html,
  render,
  server,
  fetch,
  form,
  app,
  configureStore,
  configureStoreDev,
  connect,
  localStorage,
  history,
  routerHelpers,
  babelConfig,
  postcssConfig,
  webpackDevConfig,
  webpackProdConfig
}
