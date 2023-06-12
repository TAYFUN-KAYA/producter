import React from "react";
import "../../assets/styles/leftbar/leftProfile/index.scss";
const LeftProfile = ({ Image, title }) => {
  return (
    <div className={"item"}>
      {Image}
      <p className={"item-text-profile"}>{title}</p>
    </div>
  );
};

export default LeftProfile;
