import styled from "@emotion/styled";
import backgroundImg from "../../../assets/images/homeBackground.png";
import { IToDoLayoutProps } from "../type";

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
  border: 1px solid RGB(22, 83, 100);
  border-radius: 8px;
  padding: 8px 18px;
  color: #fff;
  background-color: RGB(22, 83, 100);
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 0.3s;

  :hover {
    background-color: RGB(255, 154, 61);
  }
`;

const ToDoListView = ({ onShowModal }: IToDoLayoutProps) => {
  return (
    <Container>
      <AddToDoBtn onClick={onShowModal}>ToDo 작성</AddToDoBtn>
      <BackGroundImg />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </Container>
  );
};

export default ToDoListView;
