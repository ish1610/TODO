import React, { Suspense } from "react";
import LoadingView from "../../../../common/Loading/components/views/LoadingView";
import AddToDoModal from "../AddToDoModal";
import { IToDoLayoutProps } from "../../types/todos";

import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  position: absolute;
  inset: 0;
`;
const ToDoLayoutView = ({
  onCloseModal,
  onShowModal,
  isShowModal,
}: IToDoLayoutProps) => {
  const ToDoList = React.lazy(() => import("../ToDoList"));
  return (
    <Container>
      <Suspense fallback={<LoadingView />}>
        <ToDoList onShowModal={onShowModal} />
      </Suspense>

      <AddToDoModal isShowModal={isShowModal} onCloseModal={onCloseModal} />
    </Container>
  );
};

export default ToDoLayoutView;
