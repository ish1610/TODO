import axios from "axios";
import {
  CreateToDoCb,
  DeleteToDoCb,
  GetToDoCb,
  ToDo,
  ToDoInputValue,
} from "../types/todos";
import { randomString } from "../../Common/Util/randomString";
import { getDate } from "../../Common/Util/date";

export const ToDoAPI = {
  createToDo: (toDo: ToDoInputValue, createToDoCb: CreateToDoCb) => {
    const newToDo = {
      id: randomString(20),
      createdAt: getDate(),
      updatedAt: getDate(),
      ...toDo,
    };

    axios
      .patch(
        `https://preonboardingtodo-default-rtdb.firebaseio.com/todos/${newToDo.id}.json`,
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
  deleteToDo: (id: string, deleteToDoCb: DeleteToDoCb) => {
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
  updateToDo: (toDo: ToDoInputValue, toDoId: string) => {
    axios
      .patch(
        `https://preonboardingtodo-default-rtdb.firebaseio.com/todos/${toDoId}.json`,

        {
          content: toDo.content,
          title: toDo.title,
          updatedAt: getDate(),
        }
      )
      .catch((error) => {
        console.log(`🚨 deleteToDoAPI : ${error.message}`);
      });
  },
};
