import React from "react";
import styled from "@emotion/styled";

const CreateToDoBtn = styled.button`
  background-color: RGB(43, 46, 74);
  color: #fff;
  padding: 14px 20px;
  border-radius: 8px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const CrateToDo = () => {
  return <CreateToDoBtn>ToDo 작성</CreateToDoBtn>;
};

export default CrateToDo;
