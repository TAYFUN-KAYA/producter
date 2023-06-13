import React from "react";
import "../../../assets/styles/task/taskManagment/list/card/index.scss";
import TaskPriority from "./TaskPriority";
import TaskDescIcon from "../../../assets/icons/task/task-card/TaskDescIcon";
import TaskDescEpicIcon from "../../../assets/icons/task/task-card/TaskDescEpicIcon";
import TaskCardSubTotal from "./TaskCardSubTotal";

const TaskCard = ({
  title,
  priority,
  type,
  descText,
  subtotal,
  id,
  key,
  onDragStart,
  onDragEnd,
  dragCard,
  itemType,
  status,
  user,
}) => {
  return (
    <div
      className="task-card"
      id={id}
      key={key}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrag={dragCard}
      datatype={status}
    >
      <p className="task-card-title" datatype={itemType}>
        {title}
      </p>
      <div className="task-card-description">
        {type === "task" ? <TaskDescIcon /> : <TaskDescEpicIcon />}
        <p className="task-card-description-text">{descText}</p>
        <div className="task-card-priority">
          <TaskPriority priority={priority} />
          <TaskCardSubTotal total={subtotal} />
          <img
            src={user.image}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
