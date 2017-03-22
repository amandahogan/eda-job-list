import React, { Component, PropTypes } from 'react'
import { Card } from 'semantic-ui-react'

import Follower from '../Follower'
import Tags from '../Tag'
import './Company.css'

const formatDate = date => {
  return new Date(date).toString()
}

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
          <Card.Header>
            {this.props.company.name}
          </Card.Header>
          <Card.Meta>
            Date Created: {formatDate(this.props.company.dateCreated)}<br />
            Last Updated: {formatDate(this.props.company.lastUpdated)}
          </Card.Meta>
          <Card.Description>
            {this.props.company.tags
              .map((tag, index) => {
                return (
                  <Tags
                    category={tag.category}
                    key={index}
                    value={tag.value}
                  />
                )
              })
            }
          </Card.Description>
          <br />
          <Card.Description>
            {this.props.company.followers
              .map((follower, index) => {
                return (
                  <Follower
                    avatar={follower.avatar}
                    key={index}
                  />
                )
              })
            }
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
    ).isRequired,
    followers: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default Company
