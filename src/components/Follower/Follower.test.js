import { shallow } from 'enzyme'
import React from 'react'

import Follower from './Follower'

const avatar = ''

describe('<Follower />', () => {
  it('matches snapshot', () => {
    expect(
      shallow(<Follower avatar={avatar} />).getNode()
    ).toMatchSnapshot()
  })
})
