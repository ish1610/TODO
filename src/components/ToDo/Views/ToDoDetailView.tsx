import React from "react";
import styled from "@emotion/styled";

import { lightOrange, orange, yellow } from "../../../styles/commonColor";
import { flexCenter } from "../../../styles/FlexCenter";
import { ITodoDetailProps } from "../../../types/todos";

const Container = styled.div`
  ${flexCenter}
`;
const ToDoDetailWrap = styled.div`
  margin-top: 50px;
  width: 90%;

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

  padding: 40px 20px 50px;

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

  .title span,
  .content span {
    background-color: ${orange};
  }

  span {
    margin-right: 20px;
    font-family: "Roboto", "Nanum Gothic", sans-serif;
    font-weight: 700;
    background-color: #ccc;
    color: #fff;
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
`;

const DetailControl = styled.div`
  ${flexCenter}
  margin-top: 50px;

  button {
    padding: 12px 40px;
    border-radius: 5px;
  }

  .update {
    border: 1px solid ${orange};
    color: ${orange};
    font-family: inherit;
    font-weight: 700;
    transition: 0.2s;
  }

  .update:hover {
    background-color: ${orange};
    color: #fff;
  }

  .cancel {
    border: 1px solid #ececec;
    background-color: #ececec;
    color: #555;
    margin-left: 30px;
  }
`;

const ToDoDetailView = ({ toDoDetail, onClickCancel }: ITodoDetailProps) => {
  const { content, title, createdAt, updatedAt } = toDoDetail;
  return (
    <Container>
      <ToDoDetailWrap>
        <header>ToDo 상세보기</header>

        <ToDoDetailContent>
          <div className="title">
            <span>ToDo 제목</span>
            <p> {title}</p>
          </div>
          <div className="content">
            <span>ToDo 내용</span>
            <p> {content}</p>
          </div>
          <div className="todoDateWrap">
            <div className="createdAt">
              <span>ToDo 작성 시간</span>
              <p> {createdAt}</p>
            </div>
            <div className="updatedAt">
              <span>ToDo 최근 수정</span>
              <p> {updatedAt}</p>
            </div>
          </div>

          <DetailControl>
            <button className="update">수정</button>
            <button className="cancel" onClick={onClickCancel}>
              취소
            </button>
          </DetailControl>
        </ToDoDetailContent>
      </ToDoDetailWrap>
    </Container>
  );
};

export default ToDoDetailView;
