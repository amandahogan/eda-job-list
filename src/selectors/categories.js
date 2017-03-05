export const getCategories = state => {
  return state.categories
}

export const getCategoryById = (state, categoryId) => {
  const matching = state.categories.find(category => {
    return category.id === categoryId
  })
  return matching === undefined ? null : matching
}
