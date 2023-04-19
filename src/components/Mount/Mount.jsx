import React from "react";
import "./style.css";

function Mount(props) {
  return (
    <div
      className={
        props.owned ? "mount-container owned" : "mount-container missing"
      }
    >
      <div className="tooltip">{props.tooltip}</div>
      <img src={props.icon} alt="" className="mount" />
    </div>
  );
}

export default Mount;