import React from "react";
import styled from "@emotion/styled";
import { ControlButton } from "../type";

const ControlBtn = styled.button`
  font-weight: 700;
  background-color: RGB(43, 46, 74);
  border: 1px solid RGB(43, 46, 74);
  color: #fff;
  padding: 14px 20px;
  border-radius: 8px;
  transition: 0.2s;
  :hover {
    background-color: #fff;
    color: RGB(43, 46, 74);
  }
`;

const ControlButtonView = ({ content }: ControlButton) => {
  return <ControlBtn>{content}</ControlBtn>;
};

export default ControlButtonView;
