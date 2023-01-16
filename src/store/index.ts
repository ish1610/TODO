import { configureStore } from "@reduxjs/toolkit";

import toDoSlice from "./ToDo/toDoSlice";

const store = configureStore({
  reducer: { toDoList: toDoSlice },
});

export default store;
