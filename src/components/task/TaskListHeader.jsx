import React from "react";
import "../../assets/styles/task/taskManagment/list/header/index.scss";
const TaskListHeader = ({ Icon, title, total, name }) => {
  return (
    <div className="task-list-header">
      <div className="task-list-content">
        {Icon}
        <p className="task-list-content-title" id={name}>
          {title}
        </p>
      </div>
      <div className="task-list-status">
        <div className="task-list-status-container">
          <p className="task-list-status-container-title">{total}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskListHeader;
