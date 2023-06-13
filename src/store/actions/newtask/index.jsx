import store from "../../../store";
import { TASKS_ACTIONS } from "../../types";

const { dispatch } = store;

export const SET_NEW_TASKS = (payload) =>
  dispatch({
    type: TASKS_ACTIONS.SET_NEW_TASK_ACTION,
    payload,
  });
