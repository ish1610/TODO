import React from "react";
import styled from "@emotion/styled";
import todoIconSheep from "../../../assets/images/todoIcon-sheep.png";

import { RiDeleteBin5Line, RiPencilFill, RiZoomInLine } from "react-icons/ri";
import {
  boxShadow,
  orange,
  warning,
  yellow,
} from "../../../styles/commonColor";

const ToDoItemWrap = styled.li`
  position: relative;
  width: 700px;
  height: 120px;
  border: 1px solid ${yellow};
  border-radius: 8px;
  padding: 10px 32px;
  background-color: #fff;
  box-shadow: ${boxShadow};
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  animation: create 1s;

  @keyframes create {
    0% {
      transform: translate(300px, 0);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

const ToDoItemIcon = styled.img`
  width: 74px;
  height: 74px;
  margin-right: 50px;
`;

const ToDoControl = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  svg {
    width: 28px;
    height: 28px;
    margin-right: 10px;

    transition: 0.3s;
    cursor: pointer;
  }

  svg:nth-of-type(1):hover,
  svg:nth-of-type(2):hover {
    color: ${orange};
  }

  svg:nth-of-type(3):hover {
    color: ${warning};
  }
`;

const ToDoItemContent = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 12px;
    height: 22px;
    overflow: hidden;
  }
  p {
    flex-grow: 1;

    font-family: "Yeon Sung", cursive;
    font-size: 18px;
  }
`;

const ToDoItemView = () => {
  return (
    <ToDoItemWrap>
      <ToDoItemIcon src={todoIconSheep} />
      <ToDoControl>
        <RiZoomInLine />
        <RiPencilFill />
        <RiDeleteBin5Line />
      </ToDoControl>

      <ToDoItemContent>
        <h3>ToDo Title</h3>
        <p>투두리스트 내용</p>
      </ToDoItemContent>
    </ToDoItemWrap>
  );
};

export default ToDoItemView;
