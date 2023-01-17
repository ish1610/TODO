import axios from "axios";
import { CreateToDoCb, GetToDoCb, ToDo, ToDoInputValue } from "../types/todos";
import { getDate } from "../util/date";
import { randomString } from "../util/randomString";

export const ToDoAPI = {
  createToDo: (toDo: ToDoInputValue, createToDoCb: CreateToDoCb) => {
    const newToDo = {
      id: randomString(10),
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
  deleteToDo: (id: string, deleteToDoCb: any) => {
    axios
      .delete(
        `https://preonboardingtodo-default-rtdb.firebaseio.com/todos.json`,
        {
          data: {
            id: id,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          deleteToDoCb(id);
        }
      })
      .catch((error) => {
        console.log(`🚨 deleteToDoAPI : ${error.message}`);
      });
  },
};
