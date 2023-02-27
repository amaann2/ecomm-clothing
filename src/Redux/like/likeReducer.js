import { addItemToLike, removeItemToLike } from "./likeUtils";

const INITIAL_STATE = {
  likeItem: [],
};

export const likeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      return {
        ...state,
        likeItem: addItemToLike(state.likeItem, action.payload),
      };
    case "REMOVE_LIKE":
      return {
        ...state,
        likeItem: removeItemToLike(state.likeItem, action.payload),
      };
    default:
      return state;
  }
};
