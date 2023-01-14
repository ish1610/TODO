import React from "react";
import styled from "@emotion/styled";
import { IAddToDoModalProps } from "../type";
import { flexCenter } from "../../../styles/FlexCenter";
import headerImg from "../../../assets/images/homeBackground.png";
import { boxShadow, blue } from "../../../styles/commonColor";

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
  border: 1px solid ${blue};
  border-radius: 5px;
  background-color: #fff;
  box-shadow: ${boxShadow};

  header {
    ${flexCenter}
    height: 54px;
    font-size: 22px;
    font-weight: 700;
    border-bottom: 1px solid ${blue};
  }

  img {
    height: 42px;
    width: 42px;
    margin-right: 10px;
  }
`;

const AddToDoModalView = ({
  isShowModal,
  onCloseModal,
}: IAddToDoModalProps) => {
  return (
    <React.Fragment>
      {/* <BackDrop onClick={onCloseModal} />

      <AddToModal>
        <header>
          <img src={headerImg} alt="헤더 로고" /> CREATE ToDo!
        </header>
      </AddToModal> */}

      {/* {isShowModal && <BackDrop onClick={onCloseModal} />}
      {isShowModal && (
        <AddToModal>
          <button></button>
          <button onClick={onCloseModal}>닫기</button>
        </AddToModal>
      )} */}
    </React.Fragment>
  );
};

export default AddToDoModalView;
