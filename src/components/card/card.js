import React from "react";
import "./card.less";

function Card({ title, children, ...rest }) {
  return (
    <div {...rest} className="card">
      {children}
    </div>
  );
}

export default Card;
