import React from "react";
import { IControlButton } from "./type";
import ControlButtonView from "./Views/ControlButtonView";

// interface ConstrollButton {
//   content: string;
// }

const ConstrolButton = ({ content }: IControlButton) => {
  return <ControlButtonView content={content} />;
};

export default ConstrolButton;
