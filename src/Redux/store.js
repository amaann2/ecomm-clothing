import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-Reducer";


const middleware =[logger]
const store = createStore(rootReducer ,applyMiddleware(...middleware));

export default store;