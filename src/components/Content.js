import React from "react";
import { useSelector } from "react-redux";
import RenderElement from "./RenderElement";

function Content() {
  const content = useSelector((state) => state);
  return (
    <div className="content-container">
      <RenderElement content={content} />
    </div>
  );
}

export default Content;
