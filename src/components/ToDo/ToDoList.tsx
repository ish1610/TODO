import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import { Store } from "../../store/types/store";
import { ToDoAPI } from "./api/toDo";

import { IToDoListProps, ToDo } from "./types/todos";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state: Store) => state.toDoList.toDoList);

  const toDoListProps = {
    onShowModal,
    toDoList,
  };

  const disPatchGetToDoList = useCallback(
    (toDoList: ToDo[]) => {
      dispatch(toDoAction.getToDoList(toDoList));
    },
    [dispatch]
  );

  useEffect(() => {
    ToDoAPI.getToDo((toDoList: ToDo[]) => disPatchGetToDoList(toDoList));
  }, [disPatchGetToDoList]);

  return <ToDoListView {...toDoListProps} />;
};

export default ToDoList;
