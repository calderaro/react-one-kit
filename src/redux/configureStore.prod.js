import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {loadState, saveState} from './localStorage'
import throttle from 'lodash/throttle'
import pick from 'lodash/pick'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore (rootReducer, h) {
  const initialState = {...loadState(), ...h}
  const store = createStoreWithMiddleware(rootReducer, initialState)
  store.subscribe(throttle(() => saveState({ date: new Date(), ...pick(store.getState(), ['user']) }), 1000))
  return store
}
