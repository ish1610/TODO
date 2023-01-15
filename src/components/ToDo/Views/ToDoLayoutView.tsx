import React from "react";
import AddToDoModal from "../AddToDoModal";
import ToDoList from "../ToDoList";
import { IToDoLayoutProps } from "../../../types/todos";

const ToDoLayoutView = ({
  onCloseModal,
  onShowModal,
  isShowModal,
}: IToDoLayoutProps) => {
  return (
    <React.Fragment>
      <ToDoList onShowModal={onShowModal} />
      <AddToDoModal isShowModal={isShowModal} onCloseModal={onCloseModal} />
    </React.Fragment>
  );
};

export default ToDoLayoutView;
