import React from "react";
import "../../../assets/styles/task/taskManagment/list/card/index.scss";
import TaskPriority from "./TaskPriority";
import TaskDescIcon from "../../../assets/icons/task/task-card/TaskDescIcon";
import TaskDescEpicIcon from "../../../assets/icons/task/task-card/TaskDescEpicIcon";
import TaskCardSubTotal from "./TaskCardSubTotal";

const TaskCard = ({ title, priority, type, descText, subtotal }) => {
  return (
    <div className="task-card">
      <p className="task-card-title">{title}</p>
      <div className="task-card-description">
        {type === "task" ? <TaskDescIcon /> : <TaskDescEpicIcon />}
        <p className="task-card-description-text">{descText}</p>
        <div className="task-card-priority">
          <TaskPriority priority={priority} />
          <TaskCardSubTotal total={subtotal} />
          <img
            src={require("../../../assets/images/Ellipse 1116.png")}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
import React, { useState } from "react";
import "../../assets/styles/task/taskManagment/index.scss";
import TaskList from "./TaskList";
import BacklogIcon from "../../assets/icons/task/task-header/BacklogIcon";
import InprogressIcon from "../../assets/icons/task/task-header/InprogressIcon";
import TestIcon from "../../assets/icons/task/task-header/TestIcon";
import TodoIcon from "../../assets/icons/task/task-header/TodoIcon";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import TaskCard from "./taskcard/TaskCard";

const TaskMangment = () => {
  const itemsNormal = {
    backlog: [
      {
        id: 1,
        title:
          "Being able to rename and edit users lorem rename and edit users",
        type: "epic",
        priority: 3,
        user: {
          name: "Nguyen Van A",
          surname: "Nguyen Van A",
          image: "https://picsum.photos/200/300",
        },
        subtotal: 13,
        desctext: "EPC-02",
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
      },
    ],

    todo: [
      {
        id: 2,
        title:
          "Being able to rename and edit users lorem rename and edit users",
        type: "task",
        priority: 2,
        user: {
          name: "Nguyen Van A",
          surname: "Nguyen Van A",
          image: "https://picsum.photos/200/300",
        },
        subtotal: 13,
        desctext: "Task-03",
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
      },
    ],
    inprogress: [
      {
        id: 3,
        title:
          "Being able to rename and edit users lorem rename and edit users",
        type: "epic",
        priority: 1,
        user: {
          name: "Nguyen Van A",
          surname: "Nguyen Van A",
          image: "https://picsum.photos/200/300",
        },
        subtotal: 13,
        desctext: "EPC-04",
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
      },
    ],
    test: [
      {
        id: 4,
        title:
          "Being able to rename and edit users lorem rename and edit users",
        type: "epic",
        priority: 3,
        user: {
          name: "Nguyen Van A",
          surname: "Nguyen Van A",
          image: "https://picsum.photos/200/300",
        },
        subtotal: 13,
        desctext: "EPC-05",
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a460",
      },
    ],
  };

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result) => {
    console.log(result);
    // if (!result.destination) {
    //   console.log(result);
    //   return;
    // }
    // const listCopy = { ...items };
    // const sourceList = listCopy[result.source.droppableId];
    // const [removedElement, newSourceList] = removeFromList(
    //   sourceList,
    //   result.source.index
    // );
    // listCopy[result.source.droppableId] = newSourceList;

    // const destinationList = listCopy[result.destination.droppableId];
    // listCopy[result.destination.droppableId] = addToList(
    //   destinationList,
    //   result.destination.index,
    //   removedElement
    // );
    // setItems(listCopy);
  };

  const [items, setItems] = useState(itemsNormal);
  return (
    <div className="taskManagment">
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskList
          title="Backlog"
          onDragEnd={onDragEnd}
          Icon={<BacklogIcon />}
          total={13}
          name={"backlog"}
        >
          {items.backlog.map((item, index) => (
            <Draggable key={item.id} draggableId={item.uuid} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard
                    title={item.title}
                    priority={item.priority}
                    type={item.type}
                    descText={item.desctext}
                    subtotal={item.subtotal}
                    // {...provided.dragHandleProps}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </TaskList>
        {/* <TaskList
          title="To Do"
          onDragEnd={onDragEnd}
          Icon={<TodoIcon />}
          total={13}
        >
          {items.todo.map((item, index) => (
            <Draggable key={item.id} draggableId={item.uuid} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard
                    title={item.title}
                    priority={item.priority}
                    type={item.type}
                    descText={item.desctext}
                    subtotal={item.subtotal}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </TaskList>
        <TaskList
          title="Inprogress"
          onDragEnd={onDragEnd}
          Icon={<InprogressIcon />}
          total={13}
        >
          {items.inprogress.map((item, index) => (
            <Draggable key={item.id} draggableId={item.uuid} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard
                    title={item.title}
                    priority={item.priority}
                    type={item.type}
                    descText={item.desctext}
                    subtotal={item.subtotal}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </TaskList>
        <TaskList
          title="Test"
          onDragEnd={onDragEnd}
          Icon={<TestIcon />}
          total={13}
        >
          {items.test.map((item, index) => (
            <Draggable key={item.id} draggableId={item.uuid} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard
                    title={item.title}
                    priority={item.priority}
                    type={item.type}
                    descText={item.desctext}
                    subtotal={item.subtotal}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </TaskList> */}
      </DragDropContext>
    </div>
  );
};

export default TaskMangment;
import React from "react";
import "../../assets/styles/task/taskManagment/list/index.scss";
import TaskListHeader from "./TaskListHeader";
import { Droppable } from "react-beautiful-dnd";
const TaskList = ({ Icon, title, total, onDragEnd, children, name }) => {
  return (
    <div className="task-list">
      <TaskListHeader Icon={Icon} title={title} total={total} />
      <div className="divider-task-list" />
      <div className="">
        <Droppable droppableId={name}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              // {...provided.draggableProps}
              // {...provided.dragHandleProps}
            >
              <div>
                {children}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default TaskList;
