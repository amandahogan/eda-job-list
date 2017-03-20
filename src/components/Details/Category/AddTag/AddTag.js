import React, { PropTypes } from 'react'
import { Button, Input } from 'semantic-ui-react'

class AddTag extends React.Component {
  constructor (props) {
    super(props)
    this.state = {editing: false, value: ''}
  }

  render () {
    if (this.state.editing) {
      return (
        <Input
          onBlur={event => {
            this.setState({
              editing: false,
              value: ''
            })
            if (this.state.value) {
              this.props.addTagValue(this.state.value)
            }
          }}
          onChange={event => this.setState({value: event.target.value})}
          type='text'
          value={this.state.value}
        >
          <input
            ref={element => {
              if (element) element.focus()
            }}
          />
        </Input>
      )
    } else {
      return (
        <Button
          basic
          icon='ellipsis horizontal'
          onClick={event => this.setState({editing: true})}
        />
      )
    }
  }
}

AddTag.propTypes = {
  addTagValue: PropTypes.func.isRequired
}

export default AddTag
