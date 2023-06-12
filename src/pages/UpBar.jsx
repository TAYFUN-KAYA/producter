import React from "react";
import "../assets/styles/upbar/upbar.scss";
import FilterOrSearchButton from "../components/upbar/FilterOrSearchButton";
import SettingsIcon from "../assets/icons/SettingsIcon";
import SearchFilterIcon from "../assets/icons/SearchFilterIcon";
import { Search } from "../components/upbar/Search";
import ProducterIcon from "../assets/icons/ProducterIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import { useNavigate } from "react-router-dom";

const UpBar = () => {
  const navigate = useNavigate();

  return (
    <div className="scssClass">
      <div className="logo">
        <ProducterIcon />
        <div className="logo-line" />
      </div>
      <div className="upbar-filter-buttons-search">
        <Search />
        <FilterOrSearchButton Component={<SettingsIcon />} />
        <FilterOrSearchButton Component={<SearchFilterIcon />} />
      </div>
      <div className="upbar-plus-button-container">
        <div
          className="upbar-plus-button"
          onClick={() => navigate("/add-new-task")}
        >
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default UpBar;
