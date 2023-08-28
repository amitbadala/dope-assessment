import React from "react";
import "./stats-card.less";
import Card from "../card/card";

function StatsCard({ totalUsers }) {
  return (
    <Card style={{ position: "relative" }}>
      <div className="stats-content">
        <h1 className="highlight">{totalUsers} %</h1>
        <span className="upwards">↑</span>
        <p className="subtitle">
          Increase in total number of new users with{" "}
          <strong>volume greater than 200000</strong>
        </p>
      </div>
    </Card>
  );
}

export default StatsCard;
