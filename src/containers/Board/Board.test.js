import { shallow } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'

import Board from './Board'

const mockStore = configureStore()

it('renders without crashing', () => {
  const initialState = {
    columns: [{id: 0}]
  }
  const store = mockStore(initialState)
  expect(shallow(
    <Board store={store} />
    ).getNode()
  ).toMatchSnapshot()
})
