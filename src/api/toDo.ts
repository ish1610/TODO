import axios from "axios";
import { CreateToDoCb, GetToDoCb, ToDo, ToDoInputValue } from "../types/todos";
import { getDate } from "../util/date";

export const ToDoAPI = {
  createToDo: (toDo: ToDoInputValue, createToDoCb: CreateToDoCb) => {
    const newToDo = {
      id: "1",
      createdAt: getDate(),
      updatedAt: getDate(),
      ...toDo,
    };

    axios
      .post(
        "https://preonboardingtodo-default-rtdb.firebaseio.com/todos.json",
        newToDo
      )
      .catch((error) => {
        console.log(`🚨 CreateToDoAPI : ${error.message}`);
      });

    createToDoCb(newToDo);
  },
  getToDo: (setTodoListCb: GetToDoCb) => {
    axios
      .get("https://preonboardingtodo-default-rtdb.firebaseio.com/todos.json")
      .then((response) => {
        const loadedToDos: ToDo[] = [];
        const { data: toDos } = response;

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
