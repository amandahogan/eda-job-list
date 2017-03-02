const initialState = {
  avatar: 'http://semantic-ui.com/images/avatar/large/stevie.jpg',
  name: 'Amanda'
}

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'LOGIN':
      return initialState

    case 'LOGOUT':
      return null

    default:
      return state
  }
}
