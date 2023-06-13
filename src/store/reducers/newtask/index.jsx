import { initialState } from "../../initialState";
import { TASKS_ACTIONS } from "../../types";

export default function newtaskReducer(state = initialState, action) {
  switch (action.type) {
    case TASKS_ACTIONS.SET_NEW_TASK_ACTION: {
      const existsTask = initialState;
      const taskType = action?.payload?.status;
      const taskCategory = ["todo", "inprogress", "backlog"].includes(taskType)
        ? "todo"
        : "done";
      existsTask[taskCategory][taskType].push(action.payload);
      return {
        tasks: existsTask,
      };
    }
    default:
      return state;
  }
}
