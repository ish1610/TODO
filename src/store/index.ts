import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../components/Features/Auth/Slice/loginSlice";
import signUpSlice from "../components/Features/Auth/Slice/signUpSlice";
import toDoModalSlice from "../components/Features/ToDo/Slice/toDoModalSlice";
import toDoSlice from "../components/Features/ToDo/Slice/toDoSlice";

const store = configureStore({
  reducer: {
    toDoList: toDoSlice,
    toDoModal: toDoModalSlice,
    login: loginSlice,
    signUp: signUpSlice,
  },
});

export default store;
