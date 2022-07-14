import { combineReducers } from "redux";
import CommonReducer from "./CommonReducer";
import SpotReducer from "./SpotReducer";

const appReducer = combineReducers({
  commonReducer: CommonReducer,
  spotReducer: SpotReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
