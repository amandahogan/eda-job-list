const initialState = [
  {
    id: 0,
    avatar: 'http://semantic-ui.com/images/avatar/large/stevie.jpg',
    name: 'Amanda'
  },
  {
    id: 1,
    avatar: 'http://semantic-ui.com/images/avatar/large/ade.jpg',
    name: 'Anna'
  },
  {
    id: 2,
    avatar: 'http://semantic-ui.com/images/avatar/large/steve.jpg',
    name: 'David'
  },
  {
    id: 3,
    avatar: 'http://1.semantic-ui.com/images/avatar/large/christian.jpg',
    name: 'Quinn'
  }
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    default:
      return state
  }
}
