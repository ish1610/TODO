import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../components/Features/Auth/Slice/loginSlice";
import signUpSlice from "../components/Features/Auth/Slice/signUpSlice";
import toDoModalSlice from "../components/Features/ToDo/Slice/toDoModalSlice";
import toDoSlice from "../components/Features/ToDo/Slice/toDoSlice";
import toDoDetailSlice from "../components/Features/ToDoDetail/Slice/toDoDetailSlice";

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
