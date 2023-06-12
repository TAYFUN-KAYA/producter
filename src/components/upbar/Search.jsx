import React from "react";
import "../../assets/styles/upbar/search/index.scss";
import SearchIcon from "../../assets/icons/SearchIcon";

export const Search = () => {
  return (
    <div className="search-container">
      <SearchIcon />
      <p className="search-text">Search</p>
    </div>
  );
};
