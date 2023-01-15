import { ToDoInputValue } from "../types/todos";

export const ToDoAPI = {
  createToDo: (toDo: ToDoInputValue) => {
    const newToDo = [
      {
        toDo,
      },
    ];
    localStorage.setItem("todo", JSON.stringify(newToDo));

    return "ToDo가 작성되었습니다!";
  },
};
