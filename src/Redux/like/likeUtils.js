export const addItemToLike = (likeItem, likeItemToAdd) => {
  const existeingItem = likeItem.find(
    (likeitem) => likeitem.id === likeItemToAdd.id
  );
  if (existeingItem) {
    return likeItem;
  }
  return [...likeItem, likeItemToAdd];
};
export const removeItemToLike = (likeItem, likeItemToremove) => {
  return likeItem.filter((likeitem) => likeitem.id !== likeItemToremove.id);
};
