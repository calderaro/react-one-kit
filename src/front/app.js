import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/index'
import {Provider} from 'react-redux'
import {ensureReady} from './rrv4Helpers'
import {renderRoutes} from 'react-router-config'
import {AppContainer} from 'react-hot-loader'
import {I18nextProvider} from 'react-i18next'

const createApp = (history, rootReducerPath, i18n, elm = 'root') => {
  injectTapEventPlugin()

  const store = configureStore(rootReducerPath, window.initialState)

  const appRender = routes =>
    ensureReady(routes).then(() =>
      render((
        <I18nextProvider i18n={i18n}>
          <AppContainer>
            <Provider store={store}>
              <Router history={history}>
                {renderRoutes(routes, {})}
              </Router>
            </Provider>
          </AppContainer>
        </ I18nextProvider>
        ), document.getElementById(elm)))

  return {render: appRender, store}
}

export default createApp
