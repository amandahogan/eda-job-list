export const getUserById = (state, userId) => {
  const matching = state.users.find(user => user.id === userId)
  if (matching === undefined) return null
  return {
    avatar: matching.avatar,
    id: matching.id,
    name: matching.name
  }
}
