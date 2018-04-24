const fetch = require('./fetch/')
const form = require('./fetch/form')

const app = require('./front/app')

const configureStore = require('./redux/configureStore.prod')
const configureStoreDev =  require('./redux/configureStore.dev')
const connect =  require('./redux/connect')
const localStorage =  require('./redux/localStorage')

const history =  require('./router/history')
const routerHelpers =  require('./router/rrv4Helpers')

module.exports = {
  fetch,
  form,
  app,
  configureStore,
  configureStoreDev,
  connect,
  localStorage,
  history,
  routerHelpers
}
