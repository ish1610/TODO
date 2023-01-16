import styled from "@emotion/styled";
import backgroundImg from "../../../assets/images/homeBackground.png";
import { blue, orange } from "../../../styles/commonColor";
import { IToDoListProps, ToDo } from "../../../types/todos";
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

const BackGroundImg = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.6;
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

const ToDoListView = ({ onShowModal, toDos }: IToDoListProps) => {
  return (
    <Container>
      <AddToDoBtn onClick={onShowModal}>ToDo 작성</AddToDoBtn>
      <BackGroundImg />
      {toDos?.map((toDo, idx) => (
        <ToDoItem key={idx} {...toDo} />
      ))}
    </Container>
  );
};

export default ToDoListView;
