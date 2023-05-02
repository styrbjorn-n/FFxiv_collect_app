import React from "react";
import "./style.css";
import classNames from "classnames";

function Mount(props) {
  return (
    <div
      className={
        props.owned ? "mount-container owned" : "mount-container missing"
      }
      onClick={(e) => {
        props.onClick((e.target.value = props.mount));
        document.body.style.overflowY = "hidden";
      }}
    >
      <div className="tooltip">{props.tooltip}</div>
      <img src={props.icon} alt="" className="mount" />
    </div>
  );
}

export default Mount;
