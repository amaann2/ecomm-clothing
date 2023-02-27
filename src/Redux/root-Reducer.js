import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import userReducer from "./User/User-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import directoryreducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
import { likeReducer } from "./like/likeReducer";

const persistConfig = {
  key: " root",
  storage,
  whitelist: ["cart", "like"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryreducer,
  shop: shopReducer,
  like: likeReducer,
});

export default persistReducer(persistConfig, rootReducer);
