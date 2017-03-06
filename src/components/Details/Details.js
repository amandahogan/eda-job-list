import React, { PropTypes } from 'react'
import { Header, Modal } from 'semantic-ui-react'

import Category from '../../components/Category'
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
        <Modal.Content image>
          <Modal.Description>
            <Header>Description:</Header>
            {this.props.company.description}
            <Header>Tags:</Header>
            {this.props.categories.map((category, index) => {
              return <Category
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
