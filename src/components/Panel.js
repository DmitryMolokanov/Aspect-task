import React from "react";
import Label from "./Label";
import Button from "./Button";
import RenderElement from "./RenderElement";

function Panel({ options }) {
  const style = {
    ...options.props,
    display: options.props.visible ? "block" : "none",
  };
  return (
    <div className="panel" style={style}>
      {options.hasOwnProperty("content") ? (
        <RenderElement content={options.content} />
      ) : null}
    </div>
  );
}

export default Panel;
