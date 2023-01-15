import Joi from "joi";
import React, { useState } from "react";
import { IAddToDoModalProps } from "./type";
import AddToDoModalView from "./Views/AddToDoModalView";

const AddToDoModal = ({ isShowModal, onCloseModal }: IAddToDoModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleDisabledAddToDo = (title: string, content: string) => {
    if (title.length < 5 || content.length < 5) {
      return true;
    }
    return false;
    // const addToDoInput = [title, content];
  };

  const addToDoProps: IAddToDoModalProps = {
    isShowModal,
    disabledAddToDo: handleDisabledAddToDo(title, content),
    onCloseModal,
    onChangedTitle: (e) => setTitle(e.target.value),
    onChangedContent: (e) => setContent(e.target.value),
  };

  return <AddToDoModalView {...addToDoProps} />;
};

export default AddToDoModal;
