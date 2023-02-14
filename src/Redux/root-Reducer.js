import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import userReducer from "./User/User-reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
