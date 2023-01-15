import { IToDoListProps } from "../../types/todos";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  return <ToDoListView onShowModal={onShowModal} />;
};

export default ToDoList;
