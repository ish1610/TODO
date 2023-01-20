import styled from "@emotion/styled";

import { blue, orange } from "../../Common/styles/commonColor";
import { IToDoListProps, ToDo } from "../types/todos";
import ToDoItem from "../ToDoItem";

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 100px 0 80px;
`;

const AddToDoBtn = styled.button`
  border: 1px solid ${blue};
  border-radius: 8px;
  padding: 8px 18px;
  color: #fff;
  background-color: ${blue};
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 0.3s;

  :hover {
    background-color: ${orange};
  }
`;

const ToDoListView = ({ onShowModal, toDoList }: IToDoListProps) => {
  return (
    <Container>
      <AddToDoBtn onClick={onShowModal}>ToDo 작성</AddToDoBtn>

      {toDoList?.map((toDo: ToDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </Container>
  );
};

export default ToDoListView;
