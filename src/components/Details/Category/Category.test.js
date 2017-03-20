import { shallow } from 'enzyme'
import React from 'react'

import Category from './Category'

describe('<Category />', () => {
  it('matches snapshot', () => {
    const category = {
      colour: 'green',
      name: 'Test'
    }
    const tags = []
    expect(
      shallow(
        <Category
          addTagValue={() => {}}
          category={category}
          tags={tags}
        />
      ).getNode()
    ).toMatchSnapshot()
  })
})
