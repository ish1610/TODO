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
  createToDo: async (toDo: ToDoInputValue, createToDoCb: CreateToDoCb) => {
    const uId = localStorage.getItem("uId");
    let newToDo = {
      id: randomString(20),
      createdAt: getDate(),
      updatedAt: getDate(),
      ...toDo,
      uId: "",
    };

    if (uId) {
      newToDo = {
        id: randomString(20),
        createdAt: getDate(),
        updatedAt: getDate(),
        uId,
        ...toDo,
      };
    }

    try {
      const { status } = await axios.patch(
        `${DB_URL}/todos/${newToDo.id}.json`,
        newToDo
      );
      if (status >= 200 && status < 300) {
        createToDoCb(newToDo);
      }
    } catch (error: any) {
      console.log(`🚨 CreateToDoAPI : ${error.message}`);
    }
  },
  getToDo: async (disPatchGetToDoList: GetToDoCb) => {
    const uId = localStorage.getItem("uId");
    const loadedToDos: ToDo[] = [];

    try {
      const { data: toDos } = await axios.get(`${DB_URL}/todos.json`);

      for (const key in toDos) {
        loadedToDos.push(toDos[key]);
      }

      const filtedToDo = loadedToDos.filter((todo) => todo.uId === uId);

      disPatchGetToDoList(filtedToDo);
    } catch (error: any) {
      console.log(`🚨 getToDoAPI : ${error.message}`);
    }
  },
  deleteToDo: async (id: string, deleteToDoCb: DeleteToDoCb) => {
    try {
      const { status } = await axios.delete(`${DB_URL}/todos/${id}.json`);

      if (status >= 200 && status < 300) {
        deleteToDoCb(id);
      }
    } catch (error: any) {
      console.log(`🚨 deleteToDoAPI : ${error.message}`);
    }
  },
  updateToDo: async (toDo: ToDo) => {
    try {
      await axios.patch(
        `${DB_URL}/todos/${toDo.id}.json`,

        {
          content: toDo.content,
          title: toDo.title,
          updatedAt: getDate(),
        }
      );
    } catch (error: any) {
      console.log(`🚨 deleteToDoAPI : ${error.message}`);
    }
  },
};
