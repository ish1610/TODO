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

    await axios
      .post(
        "https://preonboardingtodo-default-rtdb.firebaseio.com/todos.json",
        newToDo
      )
      .catch((error) => {
        console.log(`🚨 CreateToDoAPI : ${error.message}`);
      });
  },

  getToDo: async (setTodoListCb: any) => {
    await axios
      .get("https://preonboardingtodo-default-rtdb.firebaseio.com/todos.json")
      .then((resoponse) => {
        const loadedToDos: ToDo[] = [];
        const { data: toDos } = resoponse;

        for (const key in toDos) {
          loadedToDos.push(toDos[key]);
        }

        setTodoListCb(loadedToDos);
      })
      .catch((error) => {
        console.log(`🚨 getToDoAPI : ${error.message}`);
      });
  },
};
