import React from "react";
import { IToDoLayoutProps } from "./type";
import AddToDoModalView from "./Views/AddToDoModalView";

const AddToDoModal = ({ isShowModal, onCloseModal }: IToDoLayoutProps) => {
  return (
    <AddToDoModalView isShowModal={isShowModal} onCloseModal={onCloseModal} />
  );
};

export default AddToDoModal;
