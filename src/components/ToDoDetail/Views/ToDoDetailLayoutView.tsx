import styled from "@emotion/styled";
import React from "react";
import { flexCenter } from "../../Common/styles/FlexCenter";
import EmptyTodoView from "../../Common/Views/Empty/EmptyTodoView";
import ToDoDetail from "../ToDoDetail";

const ToDoDetailLayoutView = ({ createdAt }: { createdAt: string }) => {
  return (
    <Container>
      {!createdAt ? (
        <EmptyTodoView>ToDo 정보를 확인 할 수 없습니다.</EmptyTodoView>
      ) : (
        <ToDoDetail />
      )}
    </Container>
  );
};

export default ToDoDetailLayoutView;

const Container = styled.div`
  ${flexCenter}
  padding-top: 120px;
`;
