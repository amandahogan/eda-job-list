import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

import Details from '../Details'
import './Company.css'

class Company extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showComponent: false
    }
    this.onCardClick = this.onCardClick.bind(this)
  }

  onCardClick () {
    this.setState({
      showComponent: true
    })
  }

  render () {
    return (
      <Card onClick={this.onCardClick} className='Company' centered fluid>
        <Card.Content>
          <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>
            {this.props.company.name}
          </Card.Header>
          <Card.Meta>
            TimeStamp
          </Card.Meta>
          <Card.Description>
            {this.props.company.description}
          </Card.Description>
          {this.state.showComponent ? <Details /> : null}
        </Card.Content>
      </Card>
    )
  }
}

export default Company
