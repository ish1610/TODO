import React from "react";
import styled from "@emotion/styled";
import { orange } from "../../../styles/commonColor";
import { flexCenter } from "../../../styles/FlexCenter";

const Container = styled.div`
  ${flexCenter}
`;
const ToDoDetailWrap = styled.div`
  border: 3px solid ${orange};
  border-radius: 8px;
  margin-top: 50px;
  padding: 40px 20px 50px;
  width: 90%;
`;

const ToDoDetailView = () => {
  return (
    <Container>
      <ToDoDetailWrap></ToDoDetailWrap>
    </Container>
  );
};

export default ToDoDetailView;
