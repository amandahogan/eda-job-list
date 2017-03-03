export const getTagId = (state, categoryId, value) => {
  const matching = state.tags.find(tag => {
    return tag.categoryId === categoryId && tag.value === value
  })
  return matching === undefined ? null : matching
}

export const hasTag = (state, categoryId, value) => {
  return state.tags.some(tag => {
    return tag.categoryId === categoryId && tag.value === value
  })
}
