import React, { useState } from "react";

import { IToDoLayoutProps } from "./type";
import ToDoLayoutView from "./Views/ToDoLayoutView";

const ToDoLayout = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const ToDoLayouyProps: IToDoLayoutProps = {
    onCloseModal: () => setIsShowModal(false),
    onShowModal: () => setIsShowModal(true),
    isShowModal,
  };

  return <ToDoLayoutView {...ToDoLayouyProps} />;
};

export default ToDoLayout;
