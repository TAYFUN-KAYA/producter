import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";
import tasks from "./tasks";

export default reduceReducers(
  combineReducers({
    tasks,
  })
);
