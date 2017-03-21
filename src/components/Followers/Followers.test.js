import { shallow } from 'enzyme'
import React from 'react'

import Followers from './Followers'

describe('<Followers />', () => {
  it('matches snapshot', () => {
    expect(
      shallow(<Followers />).getNode()
    ).toMatchSnapshot()
  })
})
