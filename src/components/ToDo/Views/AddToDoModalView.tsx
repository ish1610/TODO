import React from "react";
import styled from "@emotion/styled";
import { IAddToDoModalProps } from "../type";

const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
`;

const AddToModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  height: 500px;
  border: 1px solid RGB(22, 83, 100);
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(43, 46, 74, 0.5);
`;

const AddToDoModalView = ({
  isShowModal,
  onCloseModal,
}: IAddToDoModalProps) => {
  return (
    <React.Fragment>
      {isShowModal && <BackDrop onClick={onCloseModal} />}
      {isShowModal && (
        <AddToModal>
          <button></button>
          <button onClick={onCloseModal}>닫기</button>
        </AddToModal>
      )}
    </React.Fragment>
  );
};

export default AddToDoModalView;
