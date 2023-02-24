import styled from "@emotion/styled";
import EmptyTodo from "../../../../common/empty/components/EmptyTodo";

import { flexCenter } from "../../../../common/styles/FlexCenter";

import ToDoDetail from "../ToDoDetail";
import { ITodoDetailLayoutProps } from "../../types/toDoDetail";

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
