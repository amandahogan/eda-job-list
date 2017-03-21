const initialState = {
  userId: 0
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
