import { shallow } from 'enzyme'
import React from 'react'

import App from './App'

describe('<App />', () => {
  it('logout matches snapshot', () => {
    const profile = null
    const login = () => {}
    const logout = () => {}
    expect(
      shallow(<App login={login} logout={logout} profile={profile} />).getNode()
    ).toMatchSnapshot()
  })
})

describe('<App />', () => {
  it('login matches snapshot', () => {
    const profile = {}
    const login = () => {}
    const logout = () => {}
    expect(
      shallow(<App login={login} logout={logout} profile={profile} />).getNode()
    ).toMatchSnapshot()
  })
})
