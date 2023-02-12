import { ToDoInputValue } from "../Types/todos";

const toDoValidation = (inputValue: ToDoInputValue) => {
  const inputValues = [inputValue.title, inputValue.content];

  return inputValues.some((value) => value.length < 5);
};

export default toDoValidation;
