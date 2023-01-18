import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import { ToDoAPI } from "./api/toDo";

import { IToDoListProps, ToDo } from "./types/todos";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state: any) => state.toDoList.toDoList);

  const toDoListProps = {
    onShowModal,
    toDoList,
  };

  useEffect(() => {
    ToDoAPI.getToDo((toDoList: ToDo[]) =>
      dispatch(toDoAction.getToDoList(toDoList))
    );
  }, []);

  return <ToDoListView {...toDoListProps} />;
};

export default ToDoList;
