import { shallow } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'

import Filter from './Filter'

describe('<Filter />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const categories = [{id: 0, name: 'test'}]
    const tags = []
    ReactDOM.render(<Filter categories={categories} tags={tags} />, div)
  })

  it('matches snapshot', () => {
    const categories = [{id: 0, name: 'test'}]
    const tags = []
    expect(
      shallow(
        <Filter categories={categories} tags={tags} />).getNode()
    ).toMatchSnapshot()
  })
})
