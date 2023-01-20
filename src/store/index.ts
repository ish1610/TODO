import { configureStore } from "@reduxjs/toolkit";
import toDoModalSlice from "./ToDo/toDoModalSlice";

import toDoSlice from "./ToDo/toDoSlice";

const store = configureStore({
  reducer: { toDoList: toDoSlice, toDoModal: toDoModalSlice },
});

export default store;
