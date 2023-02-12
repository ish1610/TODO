import axios from "axios";
import { ToDo, ToDoAPI, ToDoInputValue } from "../Types/todos";
import { randomString } from "../../../Common/Util/randomString";
import { getDate } from "../../../Common/Util/date";

const DB_URL = process.env.REACT_APP_FIREBASE_DB_URL;

export const toDoAPI: ToDoAPI = {
  createToDo: async (toDo: ToDoInputValue) => {
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
      const { status, data } = await axios.patch(
        `${DB_URL}/todos/${newToDo.id}.json`,
        newToDo
      );
      if (status >= 200 && status < 300) {
        return data;
      }
    } catch (error: any) {
      console.log(`🚨 CreateToDoAPI : ${error.message}`);
    }
  },

  getToDo: async () => {
    const uId = localStorage.getItem("uId");
    const loadedToDos: ToDo[] = [];

    try {
      const { data: toDos, status } = await axios.get(`${DB_URL}/todos.json`);

      if (status >= 200 && status < 300) {
        for (const key in toDos) {
          loadedToDos.push(toDos[key]);
        }
        const filtedToDo = loadedToDos.filter((todo) => todo.uId === uId);

        return filtedToDo;
      }
    } catch (error: any) {
      console.log(`🚨 getToDoAPI : ${error.message}`);
    }
  },
  deleteToDo: async (id: string) => {
    try {
      const { data, status } = await axios.delete(`${DB_URL}/todos/${id}.json`);

      if (status >= 200 && status < 300) {
        return data;
      }
    } catch (error: any) {
      console.log(`🚨 deleteToDoAPI : ${error.message}`);
    }
  },
  updateToDo: async (toDo: ToDo) => {
    try {
      const { data, status } = await axios.patch(
        `${DB_URL}/todos/${toDo.id}.json`,
        {
          ...toDo,
          updatedAt: getDate(),
        }
      );

      if (status >= 200 && status < 300) {
        return data;
      }
    } catch (error: any) {
      console.log(`🚨 deleteToDoAPI : ${error.message}`);
    }
  },
};
