import React, { useState } from "react";
import "../../assets/styles/task/add-new-task/index.scss";
import { v4 as uuidv4 } from "uuid";
import { SET_NEW_TASKS } from "../../store/actions";
import NotifyMessage from "../../components/task/NotifyMessage";
const AddNewTask = () => {
  const priority = {
    0: "Priority",
    1: "high",
    2: "middle",
    3: "low",
  };
  const [value, setValue] = useState({
    title: "",
    priority: 0,
    status: "Task List Choose",
  });
  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [notify, setNotify] = useState(true);
  const [notifyError, setNotifyError] = useState(true);
  const [notifyMessage, setNotifyMessage] = useState("");
  const handleSubmit = () => {
    if (value.title === "") {
      setNotifyMessage("Please enter title");
      setNotifyError(true);
      setNotify(true);
    } else if (value.status === "Task List Choose") {
      setNotifyMessage("Please choose status");
      setNotifyError(true);
      setNotify(true);
    } else if (value.priority === 0) {
      setNotifyMessage("Please choose priority");
      setNotifyError(true);
      setNotify(true);
    } else {
      const data = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        title: value.title,
        type: "task",
        priority: Number(value.priority),
        user: {
          name: "Nguyen Van A",
          surname: "Nguyen Van A",
          image: require("../../assets/images/profile2.png"),
        },
        subtotal: 13,
        desctext: "TASK-" + Math.floor(Math.random() * (999 - 100 + 1) + 100),
        uuid: uuidv4(),
        status: value.status,
      };
      SET_NEW_TASKS(data);
      setNotifyMessage("Task added successfully");
      setNotifyError(false);
      setNotify(true);
    }
  };
  return (
    <div className="add-new-container">
      <div className="add-new-task-sub-container">
        <div>
          <p className="title">Title</p>
          <input name="title" className="title-input" onChange={handleChange} />
        </div>

        <select
          name="status"
          className="dropdown"
          value={value}
          onChange={handleChange}
        >
          <option>{value.status}</option>
          <option value="backlog">Backlog</option>
          <option value="todo">To Do</option>
          <option value="inprogress">In progress</option>
          <option value="test">Test</option>
        </select>
        <select
          name="priority"
          className="dropdown"
          value={value}
          onChange={handleChange}
        >
          <option>{priority[value.priority]}</option>
          <option value={3}>Low</option>
          <option value={2}>Middle</option>
          <option value={1}>High</option>
        </select>
        {notify && (
          <NotifyMessage message={notifyMessage} status={!notifyError} />
        )}
        <button className="add-button" onClick={handleSubmit}>
          <p className="add-button-text">Add Task</p>
        </button>
      </div>
    </div>
  );
};

export default AddNewTask;
