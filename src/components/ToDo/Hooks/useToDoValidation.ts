import { useState } from "react";
import { ToDoInputValue } from "../types/todos";

const useToDoValidation = () => {
  const [toDoInput, setToDoInput] = useState({ title: "", content: "" });

  const handleDisabledToDo = (inputValue: ToDoInputValue) => {
    const inputValues = [inputValue.title, inputValue.content];

    return inputValues.some((value) => value.length < 5);
  };

  return {
    toDoInput,
    setToDoInput,
    isDisabledToDo: handleDisabledToDo(toDoInput),
  };
};

export default useToDoValidation;
