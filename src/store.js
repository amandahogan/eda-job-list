import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

const extensionCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = extensionCompose || compose

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
