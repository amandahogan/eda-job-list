let nextUserId = 5

export const addUser = (avatar, name) => {
  return {
    payload: {
      id: nextUserId++,
      avatar,
      name
    },
    type: 'ADD_USER'
  }
}
