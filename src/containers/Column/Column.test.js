import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Column from './Column'

const mockStore = configureStore()

it('renders without crashing', () => {
  const initialState = {
    companies: [{id: 0}]
  }
  const store = mockStore(initialState)
  const column = {
    id: 0
  }
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Column column={column} />
    </Provider>
    , div)
})
