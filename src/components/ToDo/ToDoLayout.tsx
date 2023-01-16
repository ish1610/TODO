import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToDoAPI } from "../../api/toDo";
import { toDoAction } from "../../store/ToDo/toDoSlice";

import { IToDoLayoutProps, ToDo } from "../../types/todos";
import ToDoLayoutView from "./Views/ToDoLayoutView";

const ToDoLayout = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    setIsShowModal(false);
  };

  const ToDoLayouyProps: IToDoLayoutProps = {
    onCloseModal: () => onCloseModal(),
    onShowModal: () => setIsShowModal(true),
    isShowModal,
  };

  useEffect(() => {
    ToDoAPI.getToDo((toDoList: ToDo[]) =>
      dispatch(toDoAction.getToDoList(toDoList))
    );
  }, []);

  return <ToDoLayoutView {...ToDoLayouyProps} />;
};

export default ToDoLayout;
