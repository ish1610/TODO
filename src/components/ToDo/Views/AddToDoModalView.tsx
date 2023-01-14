import React from "react";
import styled from "@emotion/styled";
import { IAddToDoModalProps } from "../type";
import { flexCenter } from "../../../styles/FlexCenter";
import headerImg from "../../../assets/images/homeBackground.png";
import {
  boxShadow,
  blue,
  cancel,
  lightOrange,
} from "../../../styles/commonColor";

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
    margin-bottom: 42px;
    font-size: 22px;
    font-weight: 700;
    border-bottom: 1px solid ${blue};
  }

  img {
    height: 42px;
    width: 42px;
    margin-right: 10px;
  }

  .addToDo-Content {
    ${flexCenter}
    flex-direction: column;
  }
`;

const AddToDoInputWrap = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 24px;

  label {
    margin-right: 12px;
    padding-top: 4px;
    font-size: 18px;
    font-weight: 700;
  }

  input {
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 10px;

    flex-grow: 1;
  }

  textarea {
    font-family: "Yeon Sung", cursive;
    font-size: 22px;

    height: 240px;
    padding: 10px;

    flex-grow: 1;
  }
`;

const AddToDoControl = styled.section`
  ${flexCenter}
  button {
    padding: 10px 42px;
    border-radius: 6px;
  }

  .add-todo {
    margin-right: 14px;
    color: #fff;
    background-color: ${lightOrange};
    border: 1px solid ${lightOrange};
    transition: 0.2s;
  }
  .add-todo:hover {
    color: ${lightOrange};
    background-color: #fff;
  }

  .cancel-todo {
    color: #333;
    background-color: ${cancel};
    border: 1px solid ${cancel};
  }
`;

const AddToDoModalView = ({
  isShowModal,
  onCloseModal,
}: IAddToDoModalProps) => {
  return (
    <React.Fragment>
      <BackDrop onClick={onCloseModal} />

      <AddToModal>
        <header>
          <img src={headerImg} alt="헤더 로고" /> CREATE ToDo!
        </header>
        <section className="addToDo-Content">
          <AddToDoInputWrap>
            <label htmlFor="toDotitle">제목</label>
            <input id="toDotitle" type="text" />
          </AddToDoInputWrap>

          <AddToDoInputWrap>
            <label htmlFor="toDoContent">내용</label>
            <textarea id="toDoContent" cols={30} rows={10}></textarea>
          </AddToDoInputWrap>
        </section>

        <AddToDoControl>
          <button className="add-todo">추가</button>
          <button className="cancel-todo" onClick={onCloseModal}>
            닫기
          </button>
        </AddToDoControl>
      </AddToModal>

      {/* {isShowModal && <BackDrop onClick={onCloseModal} />}
      {isShowModal && (
        <AddToModal>
       
        </AddToModal>
      )} */}
    </React.Fragment>
  );
};

export default AddToDoModalView;
