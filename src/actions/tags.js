let nextTagId = 6

export const addTag = (categoryId, value) => {
  return {
    payload: {
      id: nextTagId++,
      categoryId: categoryId,
      value: value
    },
    type: 'ADD_TAG'
  }
}
