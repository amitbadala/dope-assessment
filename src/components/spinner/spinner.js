import React from "react";
import "./spinner.less";

function Spinner({ ...rest }) {
  return (
    <div aria-live="polite" role="status" {...rest} className="spinner"></div>
  );
}

export default Spinner;
