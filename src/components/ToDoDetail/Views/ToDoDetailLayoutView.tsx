import styled from "@emotion/styled";
import EmptyTodo from "../../Common/EmptyTodo";

import { flexCenter } from "../../Common/styles/FlexCenter";

import ToDoDetail from "../ToDoDetail";

const ToDoDetailLayoutView = ({ createdAt }: { createdAt: string }) => {
  return (
    <Container>
      {!createdAt ? (
        <EmptyTodo isExistBtn={true}>
          ToDo 정보를 확인 할 수 없습니다.
        </EmptyTodo>
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