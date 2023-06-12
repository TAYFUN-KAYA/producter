import React from "react";
import "../../../assets/styles/task/taskManagment/list/card/subtotal/index.scss";
const TaskCardSubTotal = ({total}) => {
  return (
    <div className="task-card-subtotal">
      <p className="task-card-subtotal-text">{total}</p>
    </div>
  );
};

export default TaskCardSubTotal;
