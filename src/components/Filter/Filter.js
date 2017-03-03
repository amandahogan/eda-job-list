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
      <div>
        <Menu className='filterFields' fluid>
          <Dropdown placeholder='Category' fluid selection options={categories} />
          <Input placeholder='Search...' />
          <Button basic circular icon='plus' />
          <Button basic circular icon='minus' />
        </Menu>
        <Label as='a'>
          <Icon name='plus' />
          Javascript
          <Icon name='delete' />
        </Label>
        <Label as='a'>
          <Icon name='minus' />
          AngularJS
          <Icon name='delete' />
        </Label>
      </div>
    )
  }
}

export default Filter
