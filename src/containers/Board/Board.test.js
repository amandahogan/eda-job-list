import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Board from './Board'

const mockStore = configureStore()

it('renders without crashing', () => {
  const initialState = {
    columns: [{id: 0}]
  }
  const store = mockStore(initialState)
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Board />
    </Provider>
    , div)
})
