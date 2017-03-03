import React, { PropTypes } from 'react'
import { Divider, Dropdown, Image, Menu } from 'semantic-ui-react'

class Profile extends React.Component {
  render () {
    const { logout, profile } = this.props
    const trigger = (
      <span>
        <Image avatar src={profile.avatar} />
      </span>
    )
    return (
      <Menu.Item>
        <Dropdown
          button
          floating
          labeled
          trigger={trigger}
        >
          <Dropdown.Menu>
            <Dropdown.Header>
              Signed in as<br />
              {profile.name}
            </Dropdown.Header>
            <Divider />
            <Dropdown.Item onClick={logout} text='Sign out' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    )
  }
}

Profile.propTypes = {
  logout: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired
}

export default Profile
