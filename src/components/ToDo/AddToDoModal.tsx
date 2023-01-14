import React from "react";
import { IAddToDoModalProps } from "./type";
import AddToDoModalView from "./Views/AddToDoModalView";

const AddToDoModal = ({ isShowModal, onCloseModal }: IAddToDoModalProps) => {
  return (
    <AddToDoModalView isShowModal={isShowModal} onCloseModal={onCloseModal} />
  );
};

export default AddToDoModal;
