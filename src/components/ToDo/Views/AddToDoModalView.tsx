import React from "react";
import styled from "@emotion/styled";

import { TextField } from "@mui/material";
import { IAddToDoModalViewProps } from "../types/todos";
import { flexCenter } from "../../Common/styles/FlexCenter";
import headerImg from "../../../assets/images/homeBackground.png";
import {
  boxShadow,
  blue,
  cancel,
  lightOrange,
} from "../../Common/styles/commonColor";

import { yellow } from "@mui/material/colors";

const AddToDoModalView = ({
  isShowModal,
  isDisabledAddToDo,
  onClickAddToDo,
  onClickCancel,
  onChangeTitle,
  onChangeContent,
}: IAddToDoModalViewProps) => {
  return (
    <React.Fragment>
      {isShowModal && <BackDrop onClick={onClickCancel} />}

      {isShowModal && (
        <AddToModal>
          <header>
            <img src={headerImg} alt="헤더 로고" /> CREATE ToDo!
          </header>

          <form className="addToDo-Content">
            <AddToDoInputWrap>
              <TextField
                label="Title"
                name="title"
                fullWidth={true}
                autoFocus={true}
                helperText="제목은 최소 5글자 작성해주세요!"
                placeholder="작성할 ToDo의 제목을 입력해주세요."
                required
                size="small"
                color="warning"
                onChange={onChangeTitle}
                margin="normal"
              />

              <TextField
                label="Content"
                name="content"
                fullWidth={true}
                minRows={5}
                multiline
                helperText="내용은 최소 5글자 작성해주세요!"
                placeholder="작성할 ToDo의 내용을 입력해주세요."
                required
                color="warning"
                onChange={onChangeContent}
              />
            </AddToDoInputWrap>
          </form>

          <AddToDoControl isDisabled={isDisabledAddToDo}>
            <button
              className="add-todo"
              disabled={isDisabledAddToDo}
              onClick={onClickAddToDo}
            >
              작성
            </button>
            <button className="cancel-todo" onClick={onClickCancel}>
              닫기
            </button>
          </AddToDoControl>
        </AddToModal>
      )}
    </React.Fragment>
  );
};

export default AddToDoModalView;

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

  .addToDo-Content {
    ${flexCenter}
    flex-direction: column;
    padding-top: 42px;
  }
`;

const AddToDoInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 42px;

  input,
  textarea {
    font-family: "yeon sung";
    outline-color: ${yellow};
  }
`;

const AddToDoControl = styled.div<{ isDisabled: boolean }>`
  ${flexCenter}
  padding-bottom: 20px;
  button {
    padding: 10px 42px;
    border-radius: 6px;
  }

  .add-todo {
    margin-right: 14px;
    color: #fff;
    transition: 0.2s;

    cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

    background-color: ${(props) => (props.isDisabled ? cancel : lightOrange)};

    border: 1px solid ${(props) => (props.isDisabled ? cancel : lightOrange)};
  }

  .add-todo:hover {
    color: ${(props) => (props.isDisabled ? "fff" : lightOrange)};
    background-color: ${(props) => (props.isDisabled ? cancel : "#fff")};
  }

  .cancel-todo {
    color: #333;
    background-color: ${cancel};
    border: 1px solid ${cancel};
  }
`;
