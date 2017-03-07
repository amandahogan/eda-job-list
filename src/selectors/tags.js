import { getCategoryById } from './categories'

export const getTagById = (state, tagId) => {
  const matching = state.tags.find(tag => tag.id === tagId)
  if (matching === undefined) return null
  return {
    category: getCategoryById(state, matching.categoryId),
    id: matching.id,
    value: matching.value
  }
}

export const getTagId = (state, categoryId, value) => {
  const matching = state.tags.find(tag => {
    return tag.categoryId === categoryId && tag.value === value
  })
  return matching === undefined ? null : matching
}

export const getTags = state => {
  return state.tags.map(tag => getTagById(state, tag.id))
}

export const hasTag = (state, categoryId, value) => {
  return state.tags.some(tag => {
    return tag.categoryId === categoryId && tag.value === value
  })
}
