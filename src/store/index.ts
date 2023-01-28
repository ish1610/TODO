import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Auth/loginSlice";
import signUpSlice from "./Auth/signUpSlice";
import toDoModalSlice from "./ToDo/toDoModalSlice";
import toDoSlice from "./ToDo/toDoSlice";

const store = configureStore({
  reducer: {
    toDoList: toDoSlice,
    toDoModal: toDoModalSlice,
    login: loginSlice,
    signUp: signUpSlice,
  },
});

export default store;
