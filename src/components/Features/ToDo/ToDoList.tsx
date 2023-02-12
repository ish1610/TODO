import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toDoAction } from "./Slice/toDoSlice";
import { Store } from "../../../store/types/store";
import { toDoAPI } from "./Api/toDo";

import { IToDoListProps, ToDo } from "./Types/todos";
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
    toDoAPI.getToDo().then((todoList) => {
      if (todoList) {
        disPatchGetToDoList(todoList);
      }
    });
  }, [disPatchGetToDoList]);

  return <ToDoListView {...toDoListProps} />;
};

export default ToDoList;
