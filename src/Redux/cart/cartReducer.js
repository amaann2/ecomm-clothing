
import cartActionType from "./cartType";
import { addItemToCart , deleteItemFromCart, removeItemFromCart } from "./cartUtil";

const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    case cartActionType.DELETE_ITEM:
      return {
        ...state,
        cartItem: deleteItemFromCart(state.cartItem , action.payload)
      };

      case cartActionType.REMOVE_ITEM:
        return{
          ...state,
          cartItem: removeItemFromCart(state.cartItem , action.payload)
        }

    default:
      return state;
  }
};
export default cartReducer;
