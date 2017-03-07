import React, { PropTypes } from 'react'
import { Button, Dropdown, Icon, Label, Menu } from 'semantic-ui-react'

class Filter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {selectedCategoryId: null}
    this.onCategoryChange = this.onCategoryChange.bind(this)
  }

  onCategoryChange (event, data) {
    this.setState({
      selectedCategoryId: data.value
    })
  }

  render () {
    const { categories, tags } = this.props
    const categoryOptions = categories.map(function (category) {
      return {
        key: category.id,
        text: category.name,
        value: category.id
      }
    })
    const tagOptions = tags
      .filter(tag => {
        return tag.category.id === this.state.selectedCategoryId
      })
      .map(tag => {
        return {
          text: tag.value,
          value: tag.value
        }
      })

    return (
      <div className='Filter'>
        <Menu fluid>
          <Dropdown
            fluid
            options={categoryOptions}
            onChange={this.onCategoryChange}
            placeholder='Category'
            selection
          />
          <Dropdown
            allowAdditions
            fluid
            options={tagOptions}
            onChange={this.onTagChange}
            placeholder='Tag'
            search
            selection
          />
          <Button basic circular icon='plus' />
          <Button basic circular icon='minus' />
        </Menu>
        <Label as='a'>
          <Icon color='green' name='check' />
          Javascript
          <Icon name='delete' />
        </Label>
        <Label as='a'>
          <Icon color='red' name='ban' />
          AngularJS
          <Icon name='delete' />
        </Label>
      </div>
    )
  }
}

export default Filter

Filter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}
