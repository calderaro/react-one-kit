const configureStore = require('./redux/configureStore.prod')
const configureStoreDev =  require('./redux/configureStore.dev')
const connect =  require('./redux/connect')
const localStorage =  require('./redux/localStorage')

const html = require('./back/html')
const render = require('./back/render')
const server = require('./back/server')

module.exports {
  configureStore,
  configureStoreDev,
  connect
}
