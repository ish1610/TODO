import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import { ToDoAPI } from "../ToDo/api/toDo";

import { ITodoDetailProps } from "../ToDo/types/todos";
import toDoValidation from "../ToDo/Utils/toDoValidation";
import ToDoDetailView from "./Views/ToDoDetailView";

const ToDoDetail = () => {
  const toDoDetail = useSelector((state: any) => state.toDoList.toDoDetail);

  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toDoId = useParams();

  const isDisabledEditToDo = toDoValidation(toDoDetail);

  const onMoveHome = () => {
    navigate("/");
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickSave = () => {
    setIsEdit(false);
    onMoveHome();
    ToDoAPI.updateToDo(toDoDetail);
  };

  const toDoDetailProps: ITodoDetailProps = {
    toDoDetail,
    isEdit,
    isDisabledEditToDo,
    onClickCancel: onMoveHome,
    onClickEdit,
    onClickSave,
    onChangeTitle: (e) =>
      dispatch(toDoAction.changeToDoDetailTitle(e.target.value)),
    onChangeContent: (e) =>
      dispatch(toDoAction.changeToDoDetailContent(e.target.value)),
  };

  useEffect(() => {
    dispatch(toDoAction.detailToDo(toDoId));
  }, []);

  return <ToDoDetailView {...toDoDetailProps} />;
};

export default ToDoDetail;
