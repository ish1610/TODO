import React from "react";

import { IToDoLayoutProps } from "./type";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoLayoutProps) => {
  return <ToDoListView onShowModal={onShowModal} />;
};

export default ToDoList;
