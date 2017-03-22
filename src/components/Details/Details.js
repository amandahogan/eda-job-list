import React, { PropTypes } from 'react'
import { Header, Modal } from 'semantic-ui-react'

import Category from './Category'
import Follower from '../Follower'
import './Details.css'

class Details extends React.Component {
  render () {
    return (
      <Modal
        closeIcon='close'
        onClose={this.props.close}
        open={this.props.open}
      >
        <Modal.Header>{this.props.company.name}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Followers:</Header>
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
            <br />
            <br />
            <Header>Description:</Header>
            <p>{this.props.company.description}</p>
            <Header>Tags:</Header>
            {this.props.categories.map((category, index) => {
              return <Category
                addTagValue={value => {
                  return this.props.addTag(
                    this.props.company.id,
                    category.id,
                    value
                  )
                }}
                category={category}
                key={index}
                tags={category.tags}
              />
            })}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

Details.propTypes = {
  addTag: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  ).isRequired,
  company: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    followers: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default Details
