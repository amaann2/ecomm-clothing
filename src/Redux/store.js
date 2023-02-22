import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-Reducer";
import { persistStore } from "redux-persist";

const middleware = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
export default store;
