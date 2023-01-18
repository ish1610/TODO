import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import useToDoValidation from "./Hooks/useToDoValidation";
import { ITodoDetailProps } from "./types/todos";
import ToDoDetailView from "./Views/ToDoDetailView";

const ToDoDetail = () => {
  const toDoDetail = useSelector((state: any) => state.toDoList.toDoDetail);
  const {
    toDoInput,
    setToDoInput,
    isDisabledToDo: isDisabledEditToDo,
  } = useToDoValidation(toDoDetail);

  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toDoId = useParams();

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
    toDoInput,
    isDisabledEditToDo: isDisabledEditToDo(toDoInput),
    onClickCancel,
    onClickEdit,
    onClickSave,
    onChangeTitle: (e) => {
      setToDoInput((prev) => {
        return { ...prev, title: e.target.value };
      });
    },
    onChangeContent: (e) => {
      setToDoInput((prev) => {
        return { ...prev, content: e.target.value };
      });
    },
  };

  useEffect(() => {
    dispatch(toDoAction.DetailToDo(toDoId));
  }, []);

  return <ToDoDetailView {...toDoDetailProps} />;
};

export default ToDoDetail;
