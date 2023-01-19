import React from "react";
import AddToDoModal from "../AddToDoModal";
import ToDoList from "../ToDoList";
import { IToDoLayoutProps } from "../types/todos";
import WarningDeleteModal from "../WarningDeleteModal";

const ToDoLayoutView = ({
  onCloseModal,
  onShowModal,
  isShowModal,
}: IToDoLayoutProps) => {
  return (
    <React.Fragment>
      <ToDoList onShowModal={onShowModal} />
      <AddToDoModal isShowModal={isShowModal} onCloseModal={onCloseModal} />
      <WarningDeleteModal />
    </React.Fragment>
  );
};

export default ToDoLayoutView;
