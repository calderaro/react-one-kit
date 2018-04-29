import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from '../redux/configureStore.prod'
import {combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {ensureReady} from '../router/rrv4Helpers'
import {renderRoutes} from 'react-router-config'
import {AppContainer} from 'react-hot-loader'
import {I18nextProvider} from 'react-i18next'

const createApp = (history, rootReducerObject, i18n, elm = 'root') => {
  injectTapEventPlugin()
  const rootReducer = combineReducers(rootReducerObject)
  const store = configureStore(rootReducer, window.initialState)

  const appRender = routes =>
    ensureReady(routes).then(() =>
      render((
        <AppContainer>
          <I18nextProvider i18n={i18n}>
            <AppContainer>
              <Provider store={store}>
                <Router history={history}>
                  {renderRoutes(routes, {})}
                </Router>
              </Provider>
            </AppContainer>
          </ I18nextProvider>
        </AppContainer>
        ), document.getElementById(elm)))

  return {render: appRender, store}
}

export default createApp
