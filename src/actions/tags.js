let nextTagId = 6

export const addTag = (categoryId, value) => {
  return {
    payload: {
      id: nextTagId++,
      categoryId,
      companies: [],
      value
    },
    type: 'ADD_TAG'
  }
}
