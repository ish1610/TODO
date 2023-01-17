import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import ToDoDetailView from "./Views/ToDoDetailView";

const ToDoDetail = () => {
  const toDoId = useParams();
  const dispatch = useDispatch();

  dispatch(toDoAction.DetailToDo(toDoId));

  return <ToDoDetailView />;
};

export default ToDoDetail;
