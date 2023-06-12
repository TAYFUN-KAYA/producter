import React from "react";
import "../../assets/styles/task/task-controller/index.scss";
import BackIcon from "../../assets/icons/task/task-controller/BackIcon";
import TimeIcon from "../../assets/icons/task/task-controller/TimeIcon";
import TeamIcon from "../../assets/icons/task/task-controller/TeamIcon";
import CalendarIcon from "../../assets/icons/task/task-controller/CalendarIcon";
import PeopleIcon from "../../assets/icons/task/task-controller/PeopleIcon";
import TaskMangment from "../../components/task/TaskMangment";

const Task = () => {
  return (
    <div className="task-container">
      <div className="task-controller">
        <div className="back-icon">
          <BackIcon />
          <div className="vertical-line" />
        </div>
        <div className="sprint">
          <div className="time-icon">
            <TimeIcon />
          </div>
          <div className="sprint-content">
            <p className="sprint-text">SPR-06</p>
            <div className="vertical-line" />
          </div>
        </div>
        <div className="team">
          <div className="team-icon">
            <TeamIcon />
          </div>
          <div className="team-content">
            <p className="team-text">TEAM-10</p>
            <div className="vertical-line" />
          </div>
        </div>
        <p className="new-sprint-name">New Sprint Name</p>
        <div className="calendar-icon">
          <CalendarIcon />
        </div>
        <div className="people-icon">
          <PeopleIcon />
        </div>
        <button className="completed-container">
          <p className="completed-text">Complete Sprint</p>
        </button>
      </div>
      <div className="divider" />
      <div className="task-content">
        <TaskMangment />
      </div>
    </div>
  );
};

export default Task;
