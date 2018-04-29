const React = require('react')
const renderToString = require('react-dom/server')
const StaticRouter = require('react-router-dom/StaticRouter')
const Switch = require('react-router-dom/Switch')
const createStore = require('redux').createStore
const applyMiddleware = require('redux').applyMiddleware
const combineReducers = require('redux').combineReducers
const Provider = require('react-redux').Provider
const ensureReady = require('../router/rrv4Helpers').ensureReady
const renderRoutes = require('react-router-config/renderRoutes')
const AppContainer = require('react-hot-loader').AppContainer
const I18nextProvider = require('react-i18next').I18nextProvider
const thunk = require('redux-thunk').default
const h = React.createElement

module.exports = function createRender (routes, rootReducerObject, html, i18n) {
  const rootReducer = combineReducers(rootReducerObject)
  const store = applyMiddleware(thunk)(createStore)(rootReducer)
  return function render(req, res) {
    return ensureReady(routes, req.url).then(splits => {
      const routerContext = {splitPoints: []}
      const root = renderToString(
        h(I18nextProvider, {i18n: i18n},
          h(Provider, {store: stores},
            h(StaticRouter, {context: routerContext, location: req.url},
              h(Switch, null,
                renderRoutes(routes, {})
              )
            )
          )
        )
      )
      if (routerContext.url) return res.redirect(301, routerContext.url)
      return html({root, routerContext, splits: splits.map(s => s.name), head: splits.length ? splits[0].seo : null})
    })
  }
}
