import { shallow } from 'enzyme'
import React from 'react'

import Tag from './Tag'

describe('<Tag />', () => {
  it('matches snapshot', () => {
    expect(
      shallow(<Tag category={{colour: 'red'}} value='test' />).getNode()
    ).toMatchSnapshot()
  })
})
