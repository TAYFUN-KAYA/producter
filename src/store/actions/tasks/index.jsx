import store from "../../../store";
import { TASKS_ACTIONS } from "../../types";

const { dispatch } = store;

export const SET_TASKS = (payload) =>
  dispatch({
    type: TASKS_ACTIONS.SET_TASKS_ACTIONS,
    payload,
  });
