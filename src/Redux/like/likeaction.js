export const addLike = (item) => ({
  type: "ADD_LIKE",
  payload: item,
});

export const removeLike = (item) => ({
  type: "REMOVE_LIKE",
  payload: item,
});
