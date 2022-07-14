import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const createStoreWithMW = applyMiddleware(thunk)(createStore);
const store = createStoreWithMW(rootReducer);

export default store;
