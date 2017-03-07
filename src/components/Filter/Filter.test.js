import { shallow } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'

import Filter from './Filter'

describe('<Filter />', () => {
  it('renders without crashing', () => {
    const addExcludeTag = () => {}
    const addIncludeTag = () => {}
    const removeExcludeTag = () => {}
    const removeIncludeTag = () => {}
    const div = document.createElement('div')
    const categories = [{id: 0, name: 'test'}]
    const column = {id: 0}
    const tags = []
    ReactDOM.render(<Filter categories={categories} column={column} exclude={[]} include={[]} tags={tags} addExcludeTag={addExcludeTag} addIncludeTag={addIncludeTag} removeExcludeTag={removeExcludeTag} removeIncludeTag={removeIncludeTag} />, div)
  })

  it('matches snapshot', () => {
    const addExcludeTag = () => {}
    const addIncludeTag = () => {}
    const removeExcludeTag = () => {}
    const removeIncludeTag = () => {}
    const categories = [{id: 0, name: 'test'}]
    const column = {id: 0}
    const tags = []
    expect(
      shallow(
        <Filter categories={categories} column={column} exclude={[]} include={[]} tags={tags} addExcludeTag={addExcludeTag} addIncludeTag={addIncludeTag} removeExcludeTag={removeExcludeTag} removeIncludeTag={removeIncludeTag} />).getNode()
    ).toMatchSnapshot()
  })
})
