// Badge.js
import React from "react";
import "./badge.less";

const Badge = ({ label, type = "default" }) => {
  return <span className={`badge badge-${type}`}>{label}</span>;
};

export default Badge;
