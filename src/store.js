import { createStore } from 'redux'

import reducer from './reducers'

const extension = window.__REDUX_DEVTOOLS_EXTENSION__

export default createStore(reducer, extension && extension())
