import { useState } from "react";
import {
  IAddToDoModalProps,
  IAddToDoModalViewProps,
  ToDoInputValue,
} from "../types/todos";
import AddToDoModalView from "./views/AddToDoModalView";
import toDoValidation from "../utils/toDoValidation";
import ButtonDeative from "../../../common/element/components/ButtonDeative";
import { lightOrange } from "../../../common/styles/commonColor";
import { createToDoAsync } from "../slice/toDoSlice";
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
