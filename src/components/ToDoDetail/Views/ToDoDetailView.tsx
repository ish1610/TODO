import React from "react";
import styled from "@emotion/styled";
import {
  blue,
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
      <header>{!isEdit ? "상세 보기" : "수정 하기"}</header>

      <ToDoDetailContent>
        <div className="title">
          {!isEdit && (
            <React.Fragment>
              <div className={`${!isEdit ? "titleWrap detail" : "titleWrap"}`}>
                <span className="toDoDetail-sortation">ToDo 제목</span>
              </div>

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
              <div
                className={`${!isEdit ? "contentWrap detail" : "contentWrap"}`}
              >
                <span className="toDoDetail-sortation">ToDo 내용</span>{" "}
              </div>
              <p>{content}</p>
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
              <span className="toDoDetail-sortation">작성일</span>
              <p> {createdAt}</p>
            </div>
            <div className="updatedAt">
              <span className="toDoDetail-sortation">최근 수정일</span>
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
  width: 90%;
  max-width: 800px;

  header {
    ${flexCenter}

    border-radius: 8px 8px 0 0;
    background-color: ${blue};
    color: #fff;
    padding: 20px;
    font-weight: 700;
    font-size: 20px;
  }

  @media (max-width: 820px) {
    header {
      font-size: 18px;
    }
  }
`;

const ToDoDetailContent = styled.section`
  border: 3px solid ${blue};
  border-top: none;

  padding: 50px 20px 50px;

  .title,
  .content,
  .createdAt,
  .updatedAt {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }

  .createdAt,
  .updatedAt {
    margin-bottom: 24px;
    color: rgb(180, 180, 180);
    font-size: 16px;
  }

  .titleWrap,
  .contentWrap {
    align-self: flex-start;
    padding-top: 14px;
    min-width: 140px;
  }

  .title,
  .content {
    font-family: "Yeon Sung", cursive;
    font-size: 22px;
    line-height: 1.6;
    word-break: break-all;
  }

  .toDoDetail-sortation {
    margin-right: 20px;
    font-size: 16px;
    font-family: "Roboto", "Nanum Gothic", sans-serif;
  }

  .titleWrap.detail .toDoDetail-sortation,
  .contentWrap.detail .toDoDetail-sortation {
    background-color: ${orange};
    color: #fff;
    font-weight: 700;
    border-radius: 50px;
    padding: 10px 14px;
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
    font-size: 18px;
  }

  @media (max-width: 750px) {
    .title,
    .content {
      font-size: 18px;
      display: flex;
      flex-direction: column;
    }
    .toDoDetail-sortation,
    .createdAt,
    .updatedAt {
      font-size: 14px;
    }

    .titleWrap.detail .toDoDetail-sortation,
    .contentWrap.detail .toDoDetail-sortation {
      display: inline-block;
      margin-bottom: 20px;
    }
    .todoDateWrap {
      flex-direction: column;
    }
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
    transition: 0.3s;
  }

  .update:hover {
    color: ${(props) => (props.isDisabled ? "" : "#fff")};
    background-color: ${(props) => (props.isDisabled ? cancel : lightOrange)};
  }

  .cancel {
    border: 1px solid ${cancel};
    background-color: ${cancel};
    color: #555;
    margin-left: 30px;
  }
`;
