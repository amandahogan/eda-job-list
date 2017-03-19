import React, { PropTypes } from 'react'
import { Button } from 'semantic-ui-react'

class AddTag extends React.Component {
  constructor (props) {
    super(props)
    this.state = {editing: false, value: ''}
  }

  render () {
    return (
      <span>
        {this.state.editing
          ? <span>
            <input
              onChange={event => this.setState({value: event.target.value})}
              ref={element => element && element.focus()}
              type='text'
              value={this.state.value}
            />
            <Button
              basic
              onClick={event => this.props.addTagValue(this.state.value)}
            >Add</Button>
          </span>
          : <Button
            basic
            icon='plus'
            onClick={event => this.setState({editing: true})}
          />}
      </span>
    )
  }
}

AddTag.propTypes = {
  addTagValue: PropTypes.func.isRequired
}

export default AddTag
