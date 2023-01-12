import React from "react";
import ControllButtonView from "./Views/ControllButtonView";

// interface ConstrollButton {
//   content: string;
// }

const ConstrollButton = ({ content }: { content: string }) => {
  return <ControllButtonView content={content} />;
};

export default ConstrollButton;
