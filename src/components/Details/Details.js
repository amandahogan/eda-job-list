import React, { PropTypes } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import Category from '../../components/Category'
import './Details.css'

class Details extends React.Component {
  render () {
    return (
      <Modal open={this.props.open} onClose={this.props.close} >
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='http://semantic-ui.com/images/wireframe/image.png' />
          <Modal.Description>
            <Header>Tags</Header>
            {this.props.categories.map((category, index) => {
              return <Category
                category={category}
                key={index}
                tags={category.tags}
              />
            })}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

Details.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default Details
