import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToDoAPI } from "../../api/toDo";
import { toDoAction } from "../../store/ToDo/toDoSlice";

import { IToDoLayoutProps } from "../../types/todos";
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
    ToDoAPI.getToDo((test: any) => dispatch(toDoAction.getToDoList(test)));
  }, []);

  return <ToDoLayoutView {...ToDoLayouyProps} />;
};

export default ToDoLayout;
