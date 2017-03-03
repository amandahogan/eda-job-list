import React, { PropTypes } from 'react'
import { Label } from 'semantic-ui-react'

class Tag extends React.Component {
  render () {
    return (
      <Label
        as='a'
        color={this.props.category.colour}
        tag
      >{this.props.value}</Label>
    )
  }
}

Tag.propTypes = {
  category: PropTypes.shape({
    colour: PropTypes.string.isRequired
  }).isRequired,
  value: PropTypes.string.isRequired
}

export default Tag
