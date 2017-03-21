import { shallow } from 'enzyme'
import React from 'react'

import Followers from './Followers'

const avatar = ''

describe('<Followers />', () => {
  it('matches snapshot', () => {
    expect(
      shallow(<Followers avatar={avatar} />).getNode()
    ).toMatchSnapshot()
  })
})
