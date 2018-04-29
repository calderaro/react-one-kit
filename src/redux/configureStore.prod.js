const {createStore, applyMiddleware} = require('redux')
const thunk = require('redux-thunk').default
const {loadState, saveState} = require('./localStorage')
const throttle = require('lodash/throttle')
const pick = require('lodash/pick')

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

module.exports = function configureStore (rootReducer, h) {
  const initialState = {...loadState(), ...h}
  const store = createStoreWithMiddleware(rootReducer, initialState)
  store.subscribe(throttle(() => saveState({ date: new Date(), ...pick(store.getState(), ['user']) }), 1000))
  return store
}
