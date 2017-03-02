import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

import Details from '../Details'

import './Company.css'

class Company extends Component {
  render () {
    return (
      <Card className='Company' centered fluid>
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
          <Details />
        </Card.Content>
      </Card>
    )
  }
}

export default Company
