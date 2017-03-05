import { getCategoryById } from './categories'

export const getTagById = (state, tagId) => {
  const matching = state.tags.find(tag => tag.id === tagId)
  if (matching === undefined) return null
  return Object.assign(
    {},
    matching,
    {
      category: getCategoryById(matching.categoryId),
      categoryId: undefined
    }
  )
}

export const getTagId = (state, categoryId, value) => {
  const matching = state.tags.find(tag => {
    return tag.categoryId === categoryId && tag.value === value
  })
  return matching === undefined ? null : matching
}

export const getTags = state => {
  return this.state.tags.map(getTagById)
}

export const hasTag = (state, categoryId, value) => {
  return state.tags.some(tag => {
    return tag.categoryId === categoryId && tag.value === value
  })
}
