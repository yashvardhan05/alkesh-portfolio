import React from "react";

function Bar({ value: { icon, name, level } }) {
  const barWidth = `${level}%`;
  return (
    <div className="Bar">
      <div className="barWrapper" style={{ width: barWidth }}>
        <span className="barName">{name}</span>
      </div>
    </div>
  );
}

export default Bar;
