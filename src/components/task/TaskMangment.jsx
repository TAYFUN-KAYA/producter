import React, { useEffect, useState } from "react";
import "../../assets/styles/task/taskManagment/index.scss";
import TaskList from "./TaskList";
import BacklogIcon from "../../assets/icons/task/task-header/BacklogIcon";
import InprogressIcon from "../../assets/icons/task/task-header/InprogressIcon";
import TestIcon from "../../assets/icons/task/task-header/TestIcon";
import TodoIcon from "../../assets/icons/task/task-header/TodoIcon";
import TaskCard from "./taskcard/TaskCard";
import { connect } from "react-redux";
import { SET_TASKS } from "../../store/actions";

const TaskMangment = ({ tasks }) => {
  const [baseElement, setBasElement] = useState(null);
  const onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };
  const onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };
  const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };
  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  const dragCard = (evt) => {
    const datatype = evt.target.getAttribute("datatype");
    if (datatype) {
      setBasElement(datatype);
    }
  };
  const giveToDoOrDone = (type) => {
    return ["todo", "inprogress", "backlog"].includes(type) ? "todo" : "done";
  };

  const onDrop = (evt, targetType) => {
    evt.preventDefault();
    evt?.currentTarget?.classList?.remove("dragged-over");

    if (baseElement && targetType && baseElement !== targetType) {
      let dataId = evt?.dataTransfer?.getData("text/plain");
      const baseTodoOrDone = giveToDoOrDone(baseElement);
      const targetTodoOrDone = giveToDoOrDone(targetType);
      if (baseTodoOrDone && targetTodoOrDone) {
        let cardParent = tasks[baseTodoOrDone][baseElement];
        let findElement = cardParent?.find((item) => item.uuid === dataId);
        let index = cardParent?.indexOf(findElement);
        if (index !== null || index !== undefined) {
          cardParent?.splice(index, 1);
          let cardTarget = tasks[targetTodoOrDone][targetType];
          findElement.status = targetType;
          cardTarget?.push(findElement);
          SET_TASKS({ ...tasks });
        }
      }
    }
  };
  let backlog = tasks?.todo?.backlog;
  let inprogress = tasks?.todo?.inprogress;
  let test = tasks?.done?.test;
  let todo = tasks?.todo?.todo;
  return (
    <div className="taskManagment">
      <TaskList
        title="Backlog"
        Icon={<BacklogIcon />}
        total={backlog?.length}
        name={"backlog"}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
      >
        {backlog?.map((item, index) => (
          <TaskCard
            key={item.id + ""}
            id={item.uuid}
            dragCard={dragCard}
            title={item.title}
            priority={item.priority}
            type={item.type}
            descText={item.desctext}
            subtotal={item.subtotal}
            status={item.status}
            itemType={"backlog"}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            user={item.user}
          />
        ))}
      </TaskList>
      <TaskList
        title="To Do"
        Icon={<TodoIcon />}
        total={todo?.length}
        name={"todo"}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
      >
        {todo?.map((item, index) => (
          <TaskCard
            key={item.id + ""}
            id={item.uuid}
            title={item.title}
            priority={item.priority}
            type={item.type}
            dragCard={dragCard}
            status={item.status}
            itemType={"todo"}
            descText={item.desctext}
            subtotal={item.subtotal}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            user={item.user}
          />
        ))}
      </TaskList>
      <TaskList
        title="Inprogress"
        Icon={<InprogressIcon />}
        total={inprogress?.length}
        name={"inprogress"}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
      >
        {inprogress?.map((item, index) => (
          <TaskCard
            key={item.id + ""}
            id={item.uuid}
            title={item.title}
            priority={item.priority}
            type={item.type}
            descText={item.desctext}
            dragCard={dragCard}
            status={item.status}
            itemType={"inprogress"}
            subtotal={item.subtotal}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            user={item.user}
          />
        ))}
      </TaskList>
      <TaskList
        title="Test"
        Icon={<TestIcon />}
        total={test?.length}
        name={"test"}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
      >
        {test?.map((item, index) => (
          <TaskCard
            key={item.id + ""}
            id={item.uuid}
            title={item.title}
            priority={item.priority}
            type={item.type}
            descText={item.desctext}
            dragCard={dragCard}
            status={item.status}
            itemType={"test"}
            subtotal={item.subtotal}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            user={item.user}
          />
        ))}
      </TaskList>
    </div>
  );
};

const S = (state) => ({
  tasks: state.tasks,
});
export default connect(S)(TaskMangment);
