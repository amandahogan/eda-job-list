import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Sort extends Component {
  state = { activeItem: 'Data Created' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item name='Data Created' active={activeItem === 'Data Created'} onClick={this.handleItemClick} />
        <Menu.Item name='Last Updated' active={activeItem === 'Last Updated'} onClick={this.handleItemClick} />
        <Menu.Item name='Name' active={activeItem === 'Name'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default Sort
