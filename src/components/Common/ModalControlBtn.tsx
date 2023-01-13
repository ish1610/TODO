import React from "react";
import { IModalControlBtn } from "./type";
import ModalControlBtnView from "./Views/ModalControlBtnView";

const ModalControlBtn = ({ content }: IModalControlBtn) => {
  const ModalControlBtnProps = {
    content,
  };
  return <ModalControlBtnView {...ModalControlBtnProps} />;
};

export default ModalControlBtn;
