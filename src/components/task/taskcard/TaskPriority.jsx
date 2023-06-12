import React from "react";
import "../../../assets/styles/task/taskManagment/list/card/priority/index.scss";
const TaskPriority = ({ priority }) => {
  return (
    <div className="task-priority">
      <div
        className={
          priority === 1
            ? "column-one column-width priority-high"
            : priority === 2
            ? "column-one column-width priority-middle"
            : "column-one column-width priority-low"
        }
      />
      <div
        className={
          priority === 2
            ? "column-two column-width priority-middle"
            : priority === 1
            ? "column-two column-width priority-high"
            : "column-two column-width defult-priority"
        }
      />
      <div
        className={
          priority === 1
            ? "column-three column-width priority-high"
            : "column-three column-width defult-priority"
        }
      />
    </div>
  );
};

export default TaskPriority;
