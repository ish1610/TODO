import React from "react";
import styled from "@emotion/styled";
import backgroundImg from "../../../assets/images/homeBackground.png";
import ToDoItem from "./ToDoItem";

const Container = styled.ul`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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

const ToDoList = () => {
  return (
    <Container>
      <BackGroundImg />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </Container>
  );
};

export default ToDoList;
