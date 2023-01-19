import { ToDoInputValue } from "../types/todos";

const toDoValidation = (inputValue: ToDoInputValue) => {
  const inputValues = [inputValue.title, inputValue.content];

  return inputValues.some((value) => value.length < 5);
};

export default toDoValidation;
