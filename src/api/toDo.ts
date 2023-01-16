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
  getToDo: (setterCb: (toDos: ToDo[]) => void) => {
    const loadedToDos: ToDo[] = [];

    axios
      .get("https://preonboardingtodo-default-rtdb.firebaseio.com/todos.json")
      .then((resondse) => {
        const { data: toDos } = resondse;

        for (const key in toDos) {
          loadedToDos.push(toDos[key]);
        }

        // console.log(loadedToDos);
      })
      .catch((error) => {
        console.log(`🚨 getToDoAPI : ${error.message}`);
      })
      .finally(() => {
        setterCb(loadedToDos);
      });
  },
};
