import React from 'react'
import ReactDOM from 'react-dom'

import Company from './Company'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const company = {
    name: 'Lightbox',
    description: 'test',
    tags: []
  }
  ReactDOM.render(<Company company={company} />, div)
})
