import React from "react";
import "../../assets/styles/task/taskManagment/list/index.scss";
import TaskListHeader from "./TaskListHeader";
const TaskList = ({
  Icon,
  title,
  total,
  children,
  name,
  onDragLeave,
  onDragEnter,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
  return (
    <div
      className="task-list-general"
      onDragLeave={(e) => onDragLeave(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragEnd={(e) => onDragEnd(e)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, name)}
    >
      <TaskListHeader Icon={Icon} title={title} total={total} name={name} />
      <div className="divider-task-list" />
      <div className="task-list-container">{children}</div>
    </div>
  );
};

export default TaskList;
