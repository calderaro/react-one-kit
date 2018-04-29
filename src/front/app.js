const React = require('react')
const render = require('react-dom').render
const Router = require('react-router-dom').Router
const injectTapEventPlugin = require('react-tap-event-plugin')
const configureStore = require('../redux/configureStore.prod')
const combineReducers = require('redux').combineReducers
const Provider = require('react-redux').Provider
const ensureReady = require('../router/rrv4Helpers').ensureReady
const renderRoutes = require('react-router-config').renderRoutes
const AppContainer = require('react-hot-loader').AppContainer
const I18nextProvider = require('react-i18next').I18nextProvider
const h = React.createElement

const createApp = (history, rootReducerObject, i18n, elm = 'root') => {
  injectTapEventPlugin()
  const rootReducer = combineReducers(rootReducerObject)
  const store = configureStore(rootReducer, window.initialState)

  const appRender = routes =>
    ensureReady(routes).then(() =>
      render((
        h(AppContainer, null,
          h(I18nextProvider, {i18n: i18n},
            h(Provider, {store},
              h(Router, {history: history},
                renderRoutes(routes, {})
              )
            )
          )
        )), document.getElementById(elm)))

  return {render: appRender, store}
}

module.exports = createApp
