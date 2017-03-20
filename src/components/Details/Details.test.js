import React from 'react'
import ReactDOM from 'react-dom'
import Details from './Details'

it('renders without crashing', () => {
  const company = {
    id: 0,
    name: 'Test'
  }
  const div = document.createElement('div')
  ReactDOM.render(
    <Details
      addTag={() => {}}
      categories={[]}
      company={company}
    />,
    div
  )
})
