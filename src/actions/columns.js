let nextColumnId = 1

export const addColumn = () => {
  return {
    payload: nextColumnId++,
    type: 'ADD_COLUMN'
  }
}

export const changeSortBy = (columnId, sortBy) => {
  return {
    payload: {
      columnId,
      sortBy
    },
    type: 'CHANGE_SORT_BY'
  }
}

export const removeColumn = id => {
  return {
    payload: id,
    type: 'REMOVE_COLUMN'
  }
}
