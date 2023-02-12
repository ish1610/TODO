import styled from "@emotion/styled";
import EmptyTodo from "../../../Common/Empty/EmptyTodo";

import { flexCenter } from "../../../Common/styles/FlexCenter";

import ToDoDetail from "../ToDoDetail";
import { ITodoDetailLayoutProps } from "../Types/toDoDetail";

const ToDoDetailLayoutView = ({ toDoDetail }: ITodoDetailLayoutProps) => {
  return (
    <Container>
      {!toDoDetail.createdAt ? (
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
  padding: 50px 0 80px;
  min-width: 450px;
`;