import { combineReducers } from "redux";
import userReducer from "./UserReducer/User-reducer";

export default combineReducers({
  user: userReducer,
});
