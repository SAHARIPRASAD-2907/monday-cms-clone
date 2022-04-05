import React from "react";

function StatusDisplay({ status }) {
  const getColor = (status) => {
    let color;
    switch (status) {
      case "done":
        color = "rgb(186,255,201)";
        break;
      case "working on it":
        color = "rgb(255,223,186)";
        break;
      case "stuck":
        color = "rgb(255,179,186)";
        break;
      default:
        color = "#b3e8ff";
        break;
    }
    return color;
  };
  return (
    <div
      className="status-display"
      style={{ backgroundColor: getColor(status) }}
    >
      {status}
    </div>
  );
}

export default StatusDisplay;
