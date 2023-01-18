import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import { ITodoDetailProps } from "./types/todos";
import ToDoDetailView from "./Views/ToDoDetailView";

const ToDoDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toDoId = useParams();

  const toDoDetail = useSelector((state: any) => state.toDoList.toDoDetail);
  const onClickCancel = () => {
    navigate("/");
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickSave = () => {
    setIsEdit(false);
  };

  const toDoDetailProps: ITodoDetailProps = {
    toDoDetail,
    isEdit,
    onClickCancel,
    onClickEdit,
    onClickSave,
  };

  useEffect(() => {
    dispatch(toDoAction.DetailToDo(toDoId));
  }, []);

  return <ToDoDetailView {...toDoDetailProps} />;
};

export default ToDoDetail;
