import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToDoAPI } from "./api/toDo";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import {
  IAddToDoModalProps,
  IAddToDoModalViewProps,
  ToDo,
  ToDoInputValue,
} from "./types/todos";
import AddToDoModalView from "./Views/AddToDoModalView";
import useToDoValidation from "./Hooks/useToDoValidation";

const AddToDoModal = ({ isShowModal, onCloseModal }: IAddToDoModalProps) => {
  const {
    toDoInput,
    setToDoInput,
    isDisabledToDo: isDisabledAddToDo,
  } = useToDoValidation();

  const dispatch = useDispatch();

  const resetToDoInput = () => {
    setToDoInput({ title: "", content: "" });
  };

  const onClickCancel = () => {
    resetToDoInput();
    onCloseModal();
  };

  const onClickAddToDo = (todo: ToDoInputValue) => {
    ToDoAPI.createToDo(todo, (toDoContent: ToDo) =>
      dispatch(toDoAction.createToDo(toDoContent))
    );
    resetToDoInput();
    onCloseModal();
  };

  const addToDoProps: IAddToDoModalViewProps = {
    isShowModal,
    isDisabledAddToDo: isDisabledAddToDo(toDoInput),
    onClickAddToDo: () => onClickAddToDo(toDoInput),

    onClickCancel: () => onClickCancel(),
    onChangeTitle: (e) =>
      setToDoInput((prev) => {
        return { ...prev, title: e.target.value };
      }),
    onChangeContent: (e) =>
      setToDoInput((prev) => {
        return { ...prev, content: e.target.value };
      }),
  };

  return <AddToDoModalView {...addToDoProps} />;
};

export default AddToDoModal;
