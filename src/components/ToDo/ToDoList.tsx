import { useSelector } from "react-redux";

import { IToDoListProps } from "./types/todos";
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
