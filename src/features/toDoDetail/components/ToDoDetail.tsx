import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ButtonDeative from "../../../common/element/components/ButtonDeative";
import { lightOrange } from "../../../common/styles/commonColor";
import { toDoAPI } from "../../toDo/api/toDo";

import toDoValidation from "../../toDo/utils/toDoValidation";
import { ITodoDetailProps } from "../types/toDoDetail";
import ToDoDetailView from "./views/ToDoDetailView";

import {
  changeToDoDetailContent,
  changeToDoDetailTitle,
  selectTodoDetail,
} from "../slice/toDoDetailSlice";

const ToDoDetail = () => {
  const toDoDetail = useSelector(selectTodoDetail);

  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isDeactivationEdit = toDoValidation(toDoDetail);

  const onMoveHome = () => {
    navigate("/");
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickSave = () => {
    toDoAPI.updateToDo(toDoDetail).then((response) => {
      if (response) {
        setIsEdit(false);
        onMoveHome();
      }
    });
  };

  const dispatchChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeToDoDetailTitle(e.target.value));
  };

  const dispatchChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeToDoDetailContent(e.target.value));
  };

  const toDoDetailProps: ITodoDetailProps = {
    toDoDetail,
    isEdit,
    onClickCancel: onMoveHome,
    onClickEdit,
    onClickSave,
    onChangeTitle: dispatchChangeTitle,
    onChangeContent: dispatchChangeContent,
  };

  const editButtonDeativeProps = {
    isDeactivation: isDeactivationEdit,
    onButtonAcitve: onClickEdit,
    color: "#333",
    hoverColor: lightOrange,
    backgroundColor: "#fff",
  };

  const saveButtonDeativeProps = {
    isDeactivation: isDeactivationEdit,
    onButtonAcitve: onClickSave,
    color: "#333",
    hoverColor: lightOrange,
    backgroundColor: "#fff",
  };
  return (
    <React.Fragment>
      <ToDoDetailView {...toDoDetailProps}>
        {!isEdit && (
          <ButtonDeative {...editButtonDeativeProps}>수정</ButtonDeative>
        )}
        {isEdit && (
          <ButtonDeative {...saveButtonDeativeProps}>저장</ButtonDeative>
        )}
      </ToDoDetailView>
    </React.Fragment>
  );
};

export default ToDoDetail;
