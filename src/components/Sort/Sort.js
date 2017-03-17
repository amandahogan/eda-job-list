import React, { Component, PropTypes } from 'react'
import { Menu } from 'semantic-ui-react'

class Sort extends Component {
  constructor (props) {
    super(props)
    this.state = { activeItem: 'Date Created' }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (e, { name }) {
    this.props.changeSortBy(name)
  }

  render () {
    const { sortBy } = this.props

    return (
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item name='Date Created' active={sortBy === 'Date Created'} onClick={this.handleItemClick} />
        <Menu.Item name='Last Updated' active={sortBy === 'Last Updated'} onClick={this.handleItemClick} />
        <Menu.Item name='Name' active={sortBy === 'Name'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

Sort.propTypes = {
  changeSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired
}

export default Sort
