const initialState = [
  {
    id: 0,
    sortBy: 'date_created'
  }
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'ADD_COLUMN':
      return [
        ...state,
        {
          id: payload,
          sortBy: 'date_created'
        }
      ]

    case 'CHANGE_SORT_BY':
      return state.map(column => {
        if (column.id === payload.columnId) {
          return Object.assign(
            {},
            column,
            {sortBy: payload.sortBy}
          )
        } else {
          return column
        }
      })

    case 'REMOVE_COLUMN':
      return state.filter(column => column.id !== payload)

    default:
      return state
  }
}
