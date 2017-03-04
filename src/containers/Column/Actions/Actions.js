import React, { PropTypes } from 'react'
import { Button, Dropdown, Icon } from 'semantic-ui-react'

class Actions extends React.Component {
  render () {
    const trigger = (
      <Button basic>
        <Icon name='ellipsis horizontal' />
      </Button>
    )
    return (
      <Button.Group floated='right'>
        <Dropdown
          button
          floating
          icon={null}
          labeled
          options={this.props.actions}
          trigger={trigger}
        />
      </Button.Group>
    )
  }
}

Actions.defaultProps = {
  actions: []
}

Actions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ).isRequired
}

export default Actions
