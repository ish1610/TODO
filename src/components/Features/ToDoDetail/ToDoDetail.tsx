import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ButtonDeative from "../../Common/Element/ButtonDeative";
import { lightOrange } from "../../Common/styles/commonColor";
import { toDoAPI } from "../ToDo/Api/toDo";

import toDoValidation from "../ToDo/Utils/toDoValidation";
import { ITodoDetailProps } from "./Types/toDoDetail";
import ToDoDetailView from "./Views/ToDoDetailView";

import {
  changeToDoDetailContent,
  changeToDoDetailTitle,
  selectTodoDetail,
} from "./Slice/toDoDetailSlice";

const ToDoDetail = () => {
  // const toDoDetail1 = useSelector((state: Store) => state.toDoList.toDoDetail);

  const toDoDetail = useSelector(selectTodoDetail);

  console.log(toDoDetail);

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
