import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToDoAPI } from "../../api/toDo";
import { IToDoListProps } from "../../types/todos";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  const toDoList = useSelector((state: any) => state.toDoList.toDoList);

  const toDoListProps = {
    onShowModal,
    toDoList,
  };

  return <ToDoListView {...toDoListProps} />;
};

export default ToDoList;
