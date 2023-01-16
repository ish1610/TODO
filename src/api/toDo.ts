import axios from "axios";
import { ToDo, ToDoInputValue } from "../types/todos";
import { getDate } from "../util/date";

export const ToDoAPI = {
  createToDo: async (toDo: ToDoInputValue) => {
    const newToDo = {
      id: 1,
      createdAt: getDate(),
      updatedAt: getDate(),
      ...toDo,
    };

    const { data } = await axios.post(
      "https://preonboardingtodo-default-rtdb.firebaseio.com/todos.json",
      newToDo
    );
  },
  getToDo: async () => {
    const { data } = await axios.get(
      "https://preonboardingtodo-default-rtdb.firebaseio.com/todos.json"
    );
  },
};

ToDoAPI.getToDo();
