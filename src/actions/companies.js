let nextColumnId = 3

export const addColumn = () => {
  return {
    payload: nextColumnId++,
    type: 'ADD_COMPANIES'
  }
}

export const removeColumn = id => {
  return {
    payload: id,
    type: 'REMOVE_COMPANIES'
  }
}
