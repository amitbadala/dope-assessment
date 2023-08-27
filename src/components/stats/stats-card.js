import React from "react";
import "./stats-card.less";
import Card from "../card/card";

function StatsCard({ totalUsers }) {
  return (
    <Card style={{ position: "relative" }}>
      <div className="stats-content">
        <h3>Total Users</h3>
        <h1>{totalUsers}</h1>
      </div>
    </Card>
  );
}

export default StatsCard;
