import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import userReducer from "./User/User-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import directoryreducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
  key: " root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryreducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
