import React, { useState } from "react";

import { IToDoLayoutProps } from "./type";
import ToDoLayoutView from "./Views/ToDoLayoutView";

const ToDoLayout = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onCloseModal = () => {
    setIsShowModal(false);
  };

  const ToDoLayouyProps: IToDoLayoutProps = {
    onCloseModal: () => onCloseModal(),
    onShowModal: () => setIsShowModal(true),
    isShowModal,
  };

  return <ToDoLayoutView {...ToDoLayouyProps} />;
};

export default ToDoLayout;
