import React from "react";
import styled from "@emotion/styled";

const CreateToDoBtn = styled.button`
  font-weight: 700;
  background-color: RGB(43, 46, 74);
  border: 1px solid RGB(43, 46, 74);
  color: #fff;
  padding: 14px 20px;
  border-radius: 8px;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 0.2s;
  :hover {
    background-color: #fff;
    color: RGB(43, 46, 74);
  }
`;

const CrateToDo = () => {
  return <CreateToDoBtn>TODO 작성</CreateToDoBtn>;
};

export default CrateToDo;
