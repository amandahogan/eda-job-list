import { shallow } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'

import Column from './Column'

const mockStore = configureStore()

it('renders without crashing', () => {
  const initialState = {
    companies: []
  }
  const store = mockStore(initialState)
  const column = {
    id: 0
  }
  shallow(
    <Column store={store} column={column} />
  )
})

it('matches snapshot', () => {
  const initialState = {
    companies: []
  }
  const store = mockStore(initialState)
  const column = {
    id: 0
  }
  expect(
    shallow(
      <Column store={store} column={column} />
  ).getNode()).toMatchSnapshot()
})
