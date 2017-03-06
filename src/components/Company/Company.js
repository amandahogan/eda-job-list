import React, { Component, PropTypes } from 'react'
import { Card, Image } from 'semantic-ui-react'

import Tags from '../Tag'
import './Company.css'

class Company extends Component {
  constructor (props) {
    super(props)
    this.onCardClick = this.onCardClick.bind(this)
  }

  onCardClick () {
    this.props.showDetails()
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
            <br />
            {this.props.company.tags.map((tag, index) => {
              return (
                <Tags
                  category={tag.category}
                  key={index}
                  value={tag.value}
                />
              )
            })}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

Company.propTypes = {
  company: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.object.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default Company
