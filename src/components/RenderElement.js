import React from "react";
import Panel from "./Panel";
import Label from "./Label";
import Button from "./Button";

const RenderElement = ({ content }) => {
  return content.map((item, index) => {
    if (item.type === "panel") return <Panel key={index} options={item} />;
    if (item.type === "label") return <Label key={index} props={item.props} />;
    if (item.type === "button")
      return <Button key={index} props={item.props} />;
  });
};

export default RenderElement;
