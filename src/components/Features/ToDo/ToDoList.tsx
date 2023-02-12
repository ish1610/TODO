import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToDoList, selectTodoList } from "./Slice/toDoSlice";

import { toDoAPI } from "./Api/toDo";

import { IToDoListProps, ToDo } from "./Types/todos";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = ({ onShowModal }: IToDoListProps) => {
  const dispatch = useDispatch();
  const toDoList = useSelector(selectTodoList);

  const toDoListProps = {
    onShowModal,
    toDoList,
  };

  const disPatchGetToDoList = useCallback(
    (toDoList: ToDo[]) => {
      dispatch(getToDoList(toDoList));
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
