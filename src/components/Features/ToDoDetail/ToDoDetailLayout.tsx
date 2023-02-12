import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toDoAction } from "../ToDo/Slice/toDoSlice";

import ToDoDetailLayoutView from "./Views/ToDoDetailLayoutView";

const ToDoDetailLayout = () => {
  const { createdAt } = useSelector((state: any) => state.toDoList.toDoDetail);
  const toDoId = useParams();
  const dispatch = useDispatch();

  const toDoDetail = {
    createdAt,
  };

  useEffect(() => {
    dispatch(toDoAction.detailToDo(toDoId));
  }, []);

  return <ToDoDetailLayoutView {...toDoDetail} />;
};

export default ToDoDetailLayout;
