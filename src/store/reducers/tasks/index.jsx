import { TASKS_ACTIONS } from "../../types";

export default function buildingsReducer(state = {}, action) {
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
