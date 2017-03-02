import React, { PropTypes } from 'react'
import { Input, Menu } from 'semantic-ui-react'

import Login from './Login'
import Profile from './Profile'

class Navbar extends React.Component {
  render () {
    const { login, logout, profile } = this.props
    return (
      <Menu>
        <Menu.Item name='home' />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          {profile ? (
            <Profile logout={logout} profile={profile} />
          ) : <Login login={login} />}
        </Menu.Menu>
      </Menu>
    )
  }
}

Navbar.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object
}

export default Navbar
