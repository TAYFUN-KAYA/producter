import React from "react";
import "../assets/styles/leftbar/leftbar.scss";
import LeftItem from "../components/leftbar/LeftItem";
import HomeIcon from "../assets/icons/leftbar/HomeIcon";
import ChatIcon from "../assets/icons/leftbar/ChatIcon";
import TaskIcon from "../assets/icons/leftbar/TaskIcon";
import RoadMapIcon from "../assets/icons/leftbar/RoadMapIcon";
import ChangeLog from "../assets/icons/leftbar/ChangeLog";
import PlusIcon from "../assets/icons/leftbar/PlusIcon";
import ChatHelpIcon from "../assets/icons/leftbar/ChatHelpIcon";
import NotifyIcon from "../assets/icons/leftbar/NotifyIcon";
import LeftProfile from "../components/leftbar/LeftProfile";
import LeftBrand from "../components/leftbar/LeftBrand";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="leftbar-line" />
      <div className="leftbar-content-top">
        <LeftItem
          active={false}
          Icon={<HomeIcon active={false} />}
          title={"Dashboard"}
        />
        <LeftItem
          active={false}
          Icon={<ChatIcon active={false} />}
          title={"Feedback"}
        />
        <LeftItem
          active={true}
          Icon={<TaskIcon active={true} />}
          title={"Task"}
        />
        <LeftItem
          active={false}
          Icon={<RoadMapIcon active={false} />}
          title={"Roadmap"}
        />
        <LeftItem
          active={false}
          Icon={<ChangeLog active={false} />}
          title={"Changelog"}
        />
      </div>
      <div className="leftbar-content-bottom">
        <LeftItem
          active={false}
          Icon={<PlusIcon active={false} />}
          title={"Invite people"}
        />
        <LeftItem
          active={false}
          Icon={<ChatHelpIcon active={false} />}
          title={"Help & Community"}
        />
        <LeftItem
          active={false}
          Icon={<TaskIcon active={false} />}
          title={"Task"}
        />
        <LeftItem
          active={false}
          Icon={<NotifyIcon active={false} />}
          title={"Notifications"}
        />
        <div className="leftbar-line-bottom" />
        <LeftProfile
          Image={
            <img
              src={require("../assets/images/Ellipse 1116.png")}
              alt="Profile"
              className="profile-image"
            />
          }
          title={"Neil Larkins"}
        />
        <div className="leftbar-line-bottom" />
        <LeftBrand title={"Epodpay Inc."} />
      </div>
    </div>
  );
};

export default LeftBar;
