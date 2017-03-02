let nextColumnId = 1

export const addColumn = () => {
  return {
    payload: nextColumnId++,
    type: 'ADD_COLUMN'
  }
}

export const removeColumn = id => {
  return {
    payload: id,
    type: 'REMOVE_COLUMN'
  }
}
