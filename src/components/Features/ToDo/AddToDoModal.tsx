import { useState } from "react";
import {
  IAddToDoModalProps,
  IAddToDoModalViewProps,
  ToDoInputValue,
} from "./Types/todos";
import AddToDoModalView from "./Views/AddToDoModalView";
import toDoValidation from "./Utils/toDoValidation";
import ButtonDeative from "../../Common/Element/ButtonDeative";
import { lightOrange } from "../../Common/styles/commonColor";
import { createToDoAsync } from "./Slice/toDoSlice";
import { useAppDispatch } from "../../../store/Hooks/hook";

const AddToDoModal = ({ isShowModal, onCloseModal }: IAddToDoModalProps) => {
  const [toDoInput, setToDoInput] = useState({ title: "", content: "" });
  const dispatch = useAppDispatch();

  const resetToDoInput = () => {
    setToDoInput({ title: "", content: "" });
  };

  const onClickCancel = () => {
    resetToDoInput();
    onCloseModal();
  };

  const onClickAddToDo = (todo: ToDoInputValue) => {
    dispatch(createToDoAsync(todo));
    resetToDoInput();
    onCloseModal();
  };

  const addToDoProps: IAddToDoModalViewProps = {
    isShowModal,
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
