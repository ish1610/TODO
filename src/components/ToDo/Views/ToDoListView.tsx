import styled from "@emotion/styled";

import { orange } from "../../Common/styles/commonColor";
import { IToDoListProps, ToDo } from "../types/todos";
import ToDoItem from "../ToDoItem";
import EmptyTodo from "../../Common/Empty/EmptyTodo";

const Container = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 180px 0 80px;
  min-width: 450px;
`;

const AddToDoBtn = styled.button`
  border: 1px solid ${orange};
  border-radius: 8px;
  padding: 8px 18px;
  color: #fff;
  background-color: ${orange};
  position: absolute;
  top: 120px;
  right: 20px;
  transition: 0.3s;

  :hover {
    background-color: #fff;
    color: #333;
  }
`;

const ToDoListView = ({ onShowModal, toDoList }: IToDoListProps) => {
  return (
    <Container>
      <AddToDoBtn onClick={onShowModal}>ToDo 작성</AddToDoBtn>
      {!toDoList?.length && <EmptyTodo>작성한 ToDo가 없어요</EmptyTodo>}
      {toDoList?.map((toDo: ToDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </Container>
  );
};

export default ToDoListView;
