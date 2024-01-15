import React from "react";

function Button({ props }) {
  const style = { ...props, display: props.visible ? "block" : "none" };
  return (
    <button className="button" style={style}>
      {props.caption}
    </button>
  );
}

export default Button;
