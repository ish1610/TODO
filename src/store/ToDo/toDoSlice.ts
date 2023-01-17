import { createSlice } from "@reduxjs/toolkit";

import { ToDoListState } from "../../types/todos";

const initialToDoState: ToDoListState = {
  toDoList: [],
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialToDoState,
  reducers: {
    createToDo: (state, action) => {
      state.toDoList.push(action.payload);
    },
    getToDoList: (state, action) => {
      state.toDoList = action.payload;
    },
    deleteToDo: (state, action) => {
      const filtedToDo = state.toDoList.filter(
        (toDo) => toDo.id !== action.payload
      );

      state.toDoList = filtedToDo;
    },
    DetailToDo: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const toDoAction = toDoSlice.actions;
export default toDoSlice.reducer;
