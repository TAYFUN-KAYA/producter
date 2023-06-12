import React from "react";
import "../../assets/styles/leftbar/leftbrand/index.scss";
const LeftBrand = ({ title }) => {
  return (
    <div className={"item-brand"}>
      <div className="brand-icon">
        <p className="brand-icon-text">E</p>
      </div>

      <p className={"item-text-profile"}>{title}</p>
    </div>
  );
};

export default LeftBrand;
