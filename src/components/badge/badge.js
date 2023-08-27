// Badge.js
import React from "react";
import "./badge.less";

const Badge = ({ label, type = "default" }) => {
  const smallCaseType = type.toLowerCase();
  return <span className={`badge badge-${smallCaseType}`}>{label}</span>;
};

export default Badge;
