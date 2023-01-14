import React from "react";

import { IToDoListProps } from "./type";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  return <ToDoListView onShowModal={onShowModal} />;
};

export default ToDoList;
