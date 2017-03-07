import React, { PropTypes } from 'react'
import { Button, Dropdown, Icon, Input, Label, Menu } from 'semantic-ui-react'

class Filter extends React.Component {
  render () {
    const { categories } = this.props
    let options = categories.map(function (category) {
      return {
        key: category.id,
        text: category.name,
        value: category.name
      }
    })
    return (
      <div className='Filter'>
        <Menu fluid>
          <Dropdown placeholder='Category' fluid selection options={options} />
          <Input placeholder='Search...' />
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
