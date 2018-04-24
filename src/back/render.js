import React from 'react'
import {StaticRouter, Route, Switch} from 'react-router-dom'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {ensureReady} from '../router/rrv4Helpers'
import {renderRoutes} from 'react-router-config';
import {renderToString} from 'react-dom/server'
import {I18nextProvider} from 'react-i18next'

export default function createRender (routes, rootReducer, html, i18n) {
  const store = applyMiddleware(thunk)(createStore)(rootReducer)
  return function render(req, res) {
    return ensureReady(routes, req.url).then(splits => {
      const routerContext = {splitPoints: []}
      const root = renderToString(
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <StaticRouter context={routerContext} location={req.url}>
              <Switch>
                {renderRoutes(routes)}
              </Switch>
            </StaticRouter>
          </Provider>
        </ I18nextProvider>
      )
      if (routerContext.url) return res.redirect(301, routerContext.url)
      return html({root, routerContext, splits: splits.map(s => s.name), head: splits.length ? splits[0].seo : null})
    })
  }
}
