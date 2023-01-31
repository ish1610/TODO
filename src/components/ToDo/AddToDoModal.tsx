import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToDoAPI } from "./api/toDo";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import {
  IAddToDoModalProps,
  IAddToDoModalViewProps,
  ToDo,
  ToDoInputValue,
} from "./types/todos";
import AddToDoModalView from "./Views/AddToDoModalView";
import toDoValidation from "./Utils/toDoValidation";
import ButtonDeative from "../Common/Element/ButtonDeative";
import { lightOrange } from "../Common/styles/commonColor";

const AddToDoModal = ({ isShowModal, onCloseModal }: IAddToDoModalProps) => {
  const [toDoInput, setToDoInput] = useState({ title: "", content: "" });
  const dispatch = useDispatch();

  const resetToDoInput = () => {
    setToDoInput({ title: "", content: "" });
  };

  const onClickCancel = () => {
    resetToDoInput();
    onCloseModal();
  };

  const onClickAddToDo = (todo: ToDoInputValue) => {
    ToDoAPI.createToDo(todo, (toDoContent: ToDo) =>
      dispatch(toDoAction.createToDo(toDoContent))
    );
    resetToDoInput();
    onCloseModal();
  };

  const addToDoProps: IAddToDoModalViewProps = {
    isShowModal,
    // onClickAddToDo: () => onClickAddToDo(toDoInput),
    onClickCancel: () => onClickCancel(),
    onChangeTitle: (e) =>
      setToDoInput((prev) => {
        return { ...prev, title: e.target.value };
      }),
    onChangeContent: (e) =>
      setToDoInput((prev) => {
        return { ...prev, content: e.target.value };
      }),
  };

  const buttonDeativeProps = {
    isDeactivation: toDoValidation(toDoInput),
    onButtonAcitve: () => onClickAddToDo(toDoInput),
    color: "#333",
    hoverColor: lightOrange,
    backgroundColor: "#fff",
  };

  return (
    <AddToDoModalView {...addToDoProps}>
      <ButtonDeative {...buttonDeativeProps}>작성</ButtonDeative>
    </AddToDoModalView>
  );
};

export default AddToDoModal;
