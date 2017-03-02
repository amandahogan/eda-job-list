const defaultColumn = {
  include: [],
  sortBy: 'date_created'
}

const initialState = [
  Object.assign(
    {},
    defaultColumn,
    {id: 0}
  )
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case 'ADD_COLUMN':
      return [
        ...state,
        Object.assign(
          {},
          defaultColumn,
          {id: payload}
        )
      ]

    case 'ADD_EXCLUDE_TAG':
      return state.map(column => {
        if (column.id === payload.columnId) {
          if (!column.exclude.includes(payload.tagId)) {
            return Object.assign(
              {},
              column,
              {
                exclude: [...column.exclude, payload.tagId]
              }
            )
          }
        }
        return column
      })

    case 'ADD_INCLUDE_TAG':
      return state.map(column => {
        if (column.id === payload.columnId) {
          if (!column.include.includes(payload.tagId)) {
            return Object.assign(
              {},
              column,
              {
                include: [...column.include, payload.tagId]
              }
            )
          }
        }
        return column
      })

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
