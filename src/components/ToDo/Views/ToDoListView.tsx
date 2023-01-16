import styled from "@emotion/styled";

import { blue, orange } from "../../../styles/commonColor";
import { IToDoListProps } from "../../../types/todos";
import NoneTodoView from "./NoneTodoView";
import ToDoItem from "./ToDoItemView";

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 0;
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

      {!toDoList?.length && <NoneTodoView />}

      {toDoList?.map((toDo, idx) => (
        <ToDoItem key={idx} {...toDo} />
      ))}
    </Container>
  );
};

export default ToDoListView;
