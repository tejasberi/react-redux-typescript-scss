import Reducer1 from "./reducer1";
import Reducer2 from "./reducer2";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  reducer1: Reducer1,
  reducer2: Reducer2
});

export default RootReducer;
