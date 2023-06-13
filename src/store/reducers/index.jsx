import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";
import tasks from "./tasks";
import newtaskReducers from "./newtask";

export default reduceReducers(
  combineReducers({
    tasks,
    newtaskReducers,
  })
);
