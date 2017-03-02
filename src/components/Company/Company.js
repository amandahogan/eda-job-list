import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

import './Company.css'

class Company extends Component {
  render () {
    return (
      <Card className='Company' centered fluid>
        <Card.Content>
          <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>
            David Christie
          </Card.Header>
          <Card.Meta>
            Friends of Quinn
          </Card.Meta>
          <Card.Description>
            David wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Company
