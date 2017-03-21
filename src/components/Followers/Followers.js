import React, { PropTypes } from 'react'
import { Image } from 'semantic-ui-react'

class Followers extends React.Component {
  render () {
    return (
      <Image floated='right' size='mini' src={this.props.avatar} />
    )
  }
}

Followers.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default Followers
