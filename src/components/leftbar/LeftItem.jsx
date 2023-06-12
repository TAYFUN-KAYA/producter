import React from "react";
import "../../assets/styles/leftbar/leftitem/index.scss";
const LeftItem = ({ active, Icon, title }) => {
  return (
    <div className={active ? "item-active" : "item"}>
      {Icon}
      <p className={active ? "item-text-active" : "item-text"}>{title}</p>
      {active && (
        <div className="left-item-rounded-container">
          <div className="left-item-rounded" />
        </div>
      )}
    </div>
  );
};

export default LeftItem;
