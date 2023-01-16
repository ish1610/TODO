import { useEffect, useState } from "react";
import { ToDoAPI } from "../../api/toDo";
import { IToDoListProps } from "../../types/todos";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  const [toDos, setToDos] = useState([
    { content: "", createdAt: "", id: "", title: "", updatedAt: "" },
  ]);

  const toDoListProps = {
    onShowModal,
    toDos,
  };

  useEffect(() => {
    ToDoAPI.getToDo(setToDos);
  }, []);

  return <ToDoListView {...toDoListProps} />;
};

export default ToDoList;
