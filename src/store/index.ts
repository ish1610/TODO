import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/auth/slice/loginSlice";
import signUpSlice from "../features/auth/slice/signUpSlice";
import toDoModalSlice from "../features/toDo/slice/toDoModalSlice";
import toDoSlice from "../features/toDo/slice/toDoSlice";
import toDoDetailSlice from "../features/toDoDetail/slice/toDoDetailSlice";

const store = configureStore({
  reducer: {
    toDoList: toDoSlice,
    toDoDetail: toDoDetailSlice,
    toDoModal: toDoModalSlice,
    login: loginSlice,
    signUp: signUpSlice,
  },
});

export default store;
