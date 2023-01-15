import Joi from "joi";
import React, { useState } from "react";
import {
  IAddToDoModalProps,
  IAddToDoModalViewProps,
  ToDoInputValue,
} from "./type";
import AddToDoModalView from "./Views/AddToDoModalView";

const AddToDoModal = ({ isShowModal, onCloseModal }: IAddToDoModalProps) => {
  const [toDoInput, setToDoInput] = useState({ title: "", content: "" });

  const handleDisabledAddToDo = (inputValue: ToDoInputValue) => {
    const { title, content } = inputValue;
    if (title.length < 5 || content.length < 5) {
      return true;
    }
    return false;
  };

  // const addToDoInput = [title, content];

  const onClickCancel = () => {
    setToDoInput({ title: "", content: "" });
    onCloseModal();
  };

  const addToDoProps: IAddToDoModalViewProps = {
    isShowModal,
    disabledAddToDo: handleDisabledAddToDo(toDoInput),
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
