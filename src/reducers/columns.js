const initialState = [
  {
    id: 0
  }
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'ADD_COLUMN':
      return [...state, {id: payload}]

    case 'REMOVE_COLUMN':
      return state.filter(column => column.id !== payload)

    default:
      return state
  }
}
