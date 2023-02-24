import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getToDoListAsync, selectTodoList } from "../slice/toDoSlice";

import { IToDoListProps } from "../types/todos";
import ToDoListView from "./views/ToDoListView";
import { useAppDispatch } from "../../../store/Hooks/hook";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  const dispatch = useAppDispatch();
  const toDoList = useSelector(selectTodoList);

  const toDoListProps = {
    onShowModal,
    toDoList,
  };

  useEffect(() => {
    dispatch(getToDoListAsync());
  }, [dispatch]);

  return <ToDoListView {...toDoListProps} />;
};

export default ToDoList;
