import cartActionType from "./cartType";

export const toggleCart = () => ({
  type: cartActionType.TOGGLE_CART,
});
export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});
export const deleteItem = (item) => ({
  type: cartActionType.DELETE_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item,
});
