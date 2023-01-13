import React from "react";
import { IControlCRUDButton } from "./type";
import ControlCRUDButtonView from "./Views/ControlButtonView";

const ControlCRUDButton = ({ content }: IControlCRUDButton) => {
  return <ControlCRUDButtonView content={content} />;
};

export default ControlCRUDButton;
