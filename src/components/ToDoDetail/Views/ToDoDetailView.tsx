import React from "react";
import styled from "@emotion/styled";
import {
  cancel,
  lightOrange,
  orange,
  yellow,
} from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";
import { ITodoDetailProps } from "../../ToDo/types/todos";
import { TextField } from "@mui/material";

const ToDoDetailView = ({
  toDoDetail,
  isEdit,
  isDisabledEditToDo,
  onClickCancel,
  onClickEdit,
  onClickSave,
  onChangeTitle,
  onChangeContent,
}: ITodoDetailProps) => {
  const { content, title, createdAt, updatedAt } = toDoDetail;

  return (
    <ToDoDetailWrap>
      <header>ToDo 상세보기</header>

      <ToDoDetailContent>
        <div className="title">
          {!isEdit && (
            <React.Fragment>
              <span className="toDoDetail-sortation">ToDo 제목</span>
              <p>{title}</p>
            </React.Fragment>
          )}

          {isEdit && (
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
              value={title}
            />
          )}
        </div>
        <div className="content">
          {!isEdit && (
            <React.Fragment>
              <span className="toDoDetail-sortation">ToDo 내용</span>
              <p> {content}</p>
            </React.Fragment>
          )}

          {isEdit && (
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
              value={content}
              onChange={onChangeContent}
            />
          )}
        </div>

        {!isEdit && (
          <div className="todoDateWrap">
            <div className="createdAt">
              <span className="toDoDetail-sortation">ToDo 작성 시간</span>
              <p> {createdAt}</p>
            </div>
            <div className="updatedAt">
              <span className="toDoDetail-sortation">ToDo 최근 수정</span>
              <p> {updatedAt}</p>
            </div>
          </div>
        )}

        <DetailControl isDisabled={isDisabledEditToDo}>
          {!isEdit && (
            <button className="update" onClick={() => onClickEdit()}>
              수정
            </button>
          )}
          {isEdit && (
            <button
              className="update"
              onClick={() => onClickSave()}
              disabled={isDisabledEditToDo}
            >
              저장
            </button>
          )}

          <button className="cancel" onClick={onClickCancel}>
            취소
          </button>
        </DetailControl>
      </ToDoDetailContent>
    </ToDoDetailWrap>
  );
};

export default ToDoDetailView;

const ToDoDetailWrap = styled.div`
  margin-top: 50px;
  width: 90%;
  max-width: 800px;

  header {
    ${flexCenter}

    border-radius: 8px 8px 0 0;
    background-color: ${lightOrange};
    color: #fff;
    padding: 20px;
    font-weight: 700;
    font-size: 20px;
  }
`;

const ToDoDetailContent = styled.section`
  border: 3px solid ${yellow};
  border-top: none;

  padding: 50px 20px 50px;

  .title,
  .content,
  .createdAt,
  .updatedAt {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .title,
  .content {
    font-family: "Yeon Sung", cursive;
  }

  .title {
  }

  .toDoDetail-sortation {
    margin-right: 20px;
    font-family: "Roboto", "Nanum Gothic", sans-serif;
    font-weight: 700;
    background-color: #ccc;
    color: #fff;
    border-radius: 50px;
    padding: 10px 14px;
  }

  .title .toDoDetail-sortation,
  .content .toDoDetail-sortation {
    min-width: 120px;
    background-color: ${orange};
  }

  .todoDateWrap {
    display: flex;
    margin-top: 50px;
  }

  .todoDateWrap .createdAt {
    margin-right: 50px;
  }

  input,
  textarea {
    font-family: "yeon sung";
    outline-color: ${yellow};
  }
`;

const DetailControl = styled.div<{ isDisabled: boolean }>`
  ${flexCenter}
  margin-top: 50px;

  button {
    padding: 12px 40px;
    border-radius: 5px;
  }

  .update {
    border: 1px solid ${(props) => (props.isDisabled ? cancel : orange)};
    cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
    background-color: ${(props) => (props.isDisabled ? cancel : "#fff")};
    color: ${(props) => (props.isDisabled ? "#fff" : orange)};
    font-family: inherit;
    font-weight: 700;
    transition: 0.2s;
  }

  .update:hover {
    color: ${(props) => (props.isDisabled ? "" : "#fff")};
    background-color: ${(props) => (props.isDisabled ? cancel : orange)};
  }

  .cancel {
    border: 1px solid ${cancel};
    background-color: ${cancel};
    color: #555;
    margin-left: 30px;
  }
`;
