import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import { ITodoDetailProps } from "../../types/todos";
import ToDoDetailView from "./Views/ToDoDetailView";

const ToDoDetail = () => {
  const toDoId = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toDoDetail = useSelector((state: any) => state.toDoList.toDoDetail);
  const onClickCancel = () => {
    navigate("/");
  };

  const toDoDetailProps: ITodoDetailProps = {
    toDoDetail,
    onClickCancel: () => onClickCancel(),
  };

  useEffect(() => {
    dispatch(toDoAction.DetailToDo(toDoId));
  }, []);

  return <ToDoDetailView {...toDoDetailProps} />;
};

export default ToDoDetail;
