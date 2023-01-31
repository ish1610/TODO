import React from "react";
import styled from "@emotion/styled";
import {
  blue,
  cancel,
  lightOrange,
  yellow,
} from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";

import { TextField } from "@mui/material";
import { ITodoDetailProps } from "../types/toDoDetail";

const ToDoDetailView = ({
  children,
  toDoDetail,
  isEdit,
  onClickCancel,
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

        <DetailControl>
          {children}

          <div className="cancelWrap">
            <button className="cancel" onClick={onClickCancel}>
              취소
            </button>
          </div>
        </DetailControl>
      </ToDoDetailContent>
    </ToDoDetailWrap>
  );
};

export default ToDoDetailView;

const ToDoDetailWrap = styled.div`
  border: 2px solid ${blue};
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  padding: 50px;

  header {
    ${flexCenter}
    color: #333;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 50px;
  }

  @media (max-width: 820px) {
    header {
      font-size: 18px;
    }
  }
`;

const ToDoDetailContent = styled.section`
  .title,
  .createdAt,
  .updatedAt {
    margin-bottom: 50px;
  }
  .content {
    margin-bottom: 80px;
  }

  .createdAt,
  .updatedAt {
    color: rgb(180, 180, 180);
    font-size: 16px;
    display: flex;
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
    display: block;
    font-weight: 700;
    color: #222;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${lightOrange};
    font-size: 18px;
  }

  .todoDateWrap {
    display: flex;
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

    .titleWrap.detail .toDoDetail-sortation,
    .contentWrap.detail .toDoDetail-sortation {
      font-size: 16px;
    }

    .createdAt,
    .updatedAt {
      font-size: 14px;
    }

    .todoDateWrap {
      flex-direction: column;
    }

    .todoDateWrap .createdAt {
      margin-right: 0px;
    }
  }
`;

const DetailControl = styled.div`
  ${flexCenter}
  margin-top: 50px;

  .cancelWrap {
    margin-top: 20px;
  }

  .cancel {
    border: 1px solid ${cancel};
    background-color: ${cancel};
    color: #555;
    margin-left: 30px;
    padding: 10px 42px;
    border-radius: 6px;
  }
`;
