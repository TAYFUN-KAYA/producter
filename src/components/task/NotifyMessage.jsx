import React from "react";

const NotifyMessage = ({ message, status }) => {
  return (
    <p className={status ? "notify notify-success" : "notify notify-warnning"}>
      {message}
    </p>
  );
};

export default NotifyMessage;
