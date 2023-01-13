import React from "react";
import { IControlCRUDButton } from "./type";
import ControlCRUDButtonView from "./Views/ControlCRUDButtonView";

// interface ConstrollButton {
//   content: string;
// }

const ConstrolCRUDButton = ({ content }: IControlCRUDButton) => {
  return <ControlCRUDButtonView content={content} />;
};

export default ConstrolCRUDButton;
