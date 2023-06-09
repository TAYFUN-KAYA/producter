import React from "react";

const PlusIcon = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.0002 2.6667V13.3334M13.3335 8.00004H2.66687H13.3335Z"
        stroke={active ? "#FFFFFF" : "#405175"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
