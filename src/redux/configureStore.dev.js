import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import window from 'global/window'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import pick from 'lodash/pick'
import { persistState } from 'redux-devtools'

const enhancers = [
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
]

export default function configureStore (rootReducer, init) {
  const initialState = {...loadState(), ...init}
  const store = createStore(rootReducer, initialState, compose(...enhancers.filter(e => e)))
  store.subscribe(throttle(() => saveState({ date: new Date(), ...pick(store.getState(), ['']) }), 1000))
  return store
}
