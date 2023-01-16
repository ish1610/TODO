import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToDoAPI } from "../../api/toDo";
import { IToDoListProps } from "../../types/todos";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  const [toDos, setToDos] = useState([
    { content: "", createdAt: "", id: "", title: "", updatedAt: "" },
  ]);

  const toDoListCtx = useSelector((state: any) => state.toDoList.toDoList);

  // console.log(toDoListCtx);

  const toDoListProps = {
    onShowModal,
    toDos,
  };

  return <ToDoListView {...toDoListProps} />;
};

export default ToDoList;
