import React from 'react'
import { Button, Dropdown, Icon, Input, Label, Menu } from 'semantic-ui-react'

const categories = [
  { key: 'languages', text: 'Languages', value: 'languages' },
  { key: 'locations', text: 'Locations', value: 'locations' },
  { key: 'technologies', text: 'Technologies', value: 'technologies' }
]

class Filter extends React.Component {
  render () {
    return (
      <div className='Filter'>
        <Menu fluid>
          <Dropdown placeholder='Category' fluid selection options={categories} />
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
