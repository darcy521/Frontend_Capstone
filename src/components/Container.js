import React from "react";
import "./component.css";

export default function Container(props) {
  return (
    <div
      className="component-container"
      style={{
        background: props.backgroundColor,
        borderTop: props.borderTop,
        borderBottom: props.borderBottom,
      }}
    >
      {props.children}
    </div>
  );
}
