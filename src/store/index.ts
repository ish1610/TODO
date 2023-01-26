import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Auth/loginSlice";
import toDoModalSlice from "./ToDo/toDoModalSlice";
import toDoSlice from "./ToDo/toDoSlice";

const store = configureStore({
  reducer: {
    toDoList: toDoSlice,
    toDoModal: toDoModalSlice,
    login: loginSlice,
  },
});

export default store;
