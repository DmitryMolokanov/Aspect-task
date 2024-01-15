import React from "react";

function Label({ props }) {
  const style = { display: props.visible ? "block" : "none" };
  return (
    <div>
      <span style={style}>{props.caption}</span>
    </div>
  );
}

export default Label;
