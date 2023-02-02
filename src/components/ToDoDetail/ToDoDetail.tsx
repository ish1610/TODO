import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import { Store } from "../../store/types/store";
import ButtonDeative from "../Common/Element/ButtonDeative";
import { lightOrange } from "../Common/styles/commonColor";
import { toDoAPI } from "../ToDo/api/toDo";

import toDoValidation from "../ToDo/Utils/toDoValidation";
import { ITodoDetailProps } from "./types/toDoDetail";
import ToDoDetailView from "./Views/ToDoDetailView";

const ToDoDetail = () => {
  const toDoDetail = useSelector((state: Store) => state.toDoList.toDoDetail);

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

  const toDoDetailProps: ITodoDetailProps = {
    toDoDetail,
    isEdit,
    onClickCancel: onMoveHome,
    onClickEdit,
    onClickSave,
    onChangeTitle: (e) =>
      dispatch(toDoAction.changeToDoDetailTitle(e.target.value)),
    onChangeContent: (e) =>
      dispatch(toDoAction.changeToDoDetailContent(e.target.value)),
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
