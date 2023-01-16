import React from "react";
import { ToDo } from "../../types/todos";
import ToDoItemView from "./Views/ToDoItemView";

const ToDoItem = (toDo: ToDo) => {
  const ToDoItemProps = {
    ...toDo,
  };
  return <ToDoItemView {...ToDoItemProps} />;
};

export default ToDoItem;
