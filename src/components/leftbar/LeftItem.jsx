import React from "react";
import "../../assets/styles/leftbar/leftitem/index.scss";
import { useNavigate } from "react-router-dom";

const LeftItem = ({ active, Icon, title, navigate_route="" }) => {
  const navigate = useNavigate();

  return (
    <div className={active ? "item-active" : "item"} onClick={()=>navigate(navigate_route)}>
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
