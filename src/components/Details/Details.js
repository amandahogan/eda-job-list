import React, { PropTypes } from 'react'
import { Header, Modal } from 'semantic-ui-react'

import Category from './Category'
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
    name: PropTypes.string.isRequired
  }).isRequired
}

export default Details
