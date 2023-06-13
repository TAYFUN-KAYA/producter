import { initialState } from "../../initialState";
import { TASKS_ACTIONS } from "../../types";

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case TASKS_ACTIONS.SET_TASKS_ACTIONS: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
