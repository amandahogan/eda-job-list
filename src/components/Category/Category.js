import React, { PropTypes } from 'react'
import { List } from 'semantic-ui-react'

import Tag from '../Tag'

class Category extends React.Component {
  render () {
    const { category, tags } = this.props
    return (
      <List horizontal>
        <span><strong>{category.name}: </strong></span>
        {tags.map((tag, index) => {
          return (
            <List.Item key={index}>
              <List.Content>
                <Tag category={category} value={tag.value} />
              </List.Content>
            </List.Item>
          )
        })}
      </List>
    )
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    colour: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Category
