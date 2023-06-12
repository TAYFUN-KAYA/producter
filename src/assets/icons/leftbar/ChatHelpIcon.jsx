import React from "react";

const ChatHelpIcon = ({ active }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.66667 11.3334L4.66667 14V11.3334H2V2.66669H14V11.3334H8.66667Z"
        stroke={active ? "#FFFFFF" : "#405175"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.6665 5.33331H11.3332M4.6665 8.66665H7.99984H11.3332"
        stroke={active ? "#FFFFFF" : "#405175"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChatHelpIcon;
