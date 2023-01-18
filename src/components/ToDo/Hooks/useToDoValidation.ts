import { useState } from "react";
import { ToDoInputValue } from "../types/todos";

const useToDoValidation = (toDoContent = { title: "", content: "" }) => {
  const [toDoInput, setToDoInput] = useState(toDoContent);

  const handleDisabledToDo = (inputValue: ToDoInputValue) => {
    const inputValues = [inputValue.title, inputValue.content];

    return inputValues.some((value) => value.length < 5);
  };

  return {
    toDoInput,
    setToDoInput,
    isDisabledToDo: (inputValue: ToDoInputValue) =>
      handleDisabledToDo(inputValue),
  };
};

export default useToDoValidation;
