import React, { useState } from "react";
import { ToDoAPI } from "../../api/toDo";
import {
  IAddToDoModalProps,
  IAddToDoModalViewProps,
  ToDoInputValue,
} from "../../types/todos";
import AddToDoModalView from "./Views/AddToDoModalView";

const AddToDoModal = ({ isShowModal, onCloseModal }: IAddToDoModalProps) => {
  const [toDoInput, setToDoInput] = useState({ title: "", content: "" });

  const handleDisabledAddToDo = (inputValue: ToDoInputValue) => {
    const inputValues = [inputValue.title, inputValue.content];

    return inputValues.some((value) => value.length < 5);
  };

  const resetToDoInput = () => {
    setToDoInput({ title: "", content: "" });
  };

  const onClickCancel = () => {
    resetToDoInput();
    onCloseModal();
  };

  const onClickAddToDo = (todo: ToDoInputValue) => {
    ToDoAPI.createToDo(todo);
  };

  const addToDoProps: IAddToDoModalViewProps = {
    isShowModal,
    disabledAddToDo: handleDisabledAddToDo(toDoInput),
    onClickAddToDo: () => onClickAddToDo(toDoInput),
    onClickCancel: () => onClickCancel(),
    onChangedTitle: (e) =>
      setToDoInput((prev) => {
        return { ...prev, title: e.target.value };
      }),
    onChangedContent: (e) =>
      setToDoInput((prev) => {
        return { ...prev, content: e.target.value };
      }),
  };

  return <AddToDoModalView {...addToDoProps} />;
};

export default AddToDoModal;
