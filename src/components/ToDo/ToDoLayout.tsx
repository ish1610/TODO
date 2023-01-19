import { useState } from "react";
import { playScroll, stopScroll } from "../Common/Util/scroll";

import { IToDoLayoutProps } from "./types/todos";
import ToDoLayoutView from "./Views/ToDoLayoutView";

const ToDoLayout = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onCloseModal = () => {
    setIsShowModal(false);
    playScroll();
  };

  const onShowModal = () => {
    setIsShowModal(true);
    stopScroll();
  };

  const ToDoLayouyProps: IToDoLayoutProps = {
    onCloseModal: () => onCloseModal(),
    onShowModal: () => onShowModal(),
    isShowModal,
  };

  return <ToDoLayoutView {...ToDoLayouyProps} />;
};

export default ToDoLayout;
