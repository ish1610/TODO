import React, { Suspense } from "react";
import LoadingView from "../../Common/Loading/Views/LoadingView";
import AddToDoModal from "../AddToDoModal";
import { IToDoLayoutProps } from "../types/todos";

const ToDoLayoutView = ({
  onCloseModal,
  onShowModal,
  isShowModal,
}: IToDoLayoutProps) => {
  const ToDoList = React.lazy(() => import("../ToDoList"));
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingView />}>
        <ToDoList onShowModal={onShowModal} />
      </Suspense>

      <AddToDoModal isShowModal={isShowModal} onCloseModal={onCloseModal} />
    </React.Fragment>
  );
};

export default ToDoLayoutView;
