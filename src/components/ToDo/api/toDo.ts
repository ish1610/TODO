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

const DB_URL = process.env.REACT_APP_FIREBASE_DB_URL;

export const ToDoAPI = {
  createToDo: (toDo: ToDoInputValue, createToDoCb: CreateToDoCb) => {
    const newToDo = {
      id: randomString(20),
      createdAt: getDate(),
      updatedAt: getDate(),
      ...toDo,
    };

    axios
      .patch(`${DB_URL}/todos/${newToDo.id}.json`, newToDo)

      .catch((error) => {
        console.log(`🚨 CreateToDoAPI : ${error.message}`);
      })
      .then(() => {
        createToDoCb(newToDo);
      });
  },
  getToDo: (setTodoListCb: GetToDoCb) => {
    axios
      .get(`${DB_URL}/todos.json`)
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
    console.log(id);
    axios
      .delete(
        `https://preonboardingtodo-default-rtdb.firebaseio.com/todos/${id}.json`
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
  updateToDo: (toDo: ToDo) => {
    axios
      .patch(
        `${DB_URL}/todos/${toDo.id}.json`,

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
