import React, { PropTypes } from 'react'
import { Image } from 'semantic-ui-react'

class Follower extends React.Component {
  render () {
    return (
      <Image floated='left' size='mini' src={this.props.avatar} />
    )
  }
}

Follower.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default Follower
