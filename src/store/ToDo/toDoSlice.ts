import { createSlice } from "@reduxjs/toolkit";

import { ToDoListState } from "../../types/todos";

const initialToDoState: ToDoListState = {
  toDoList: [],
  toDoDetail: { content: "", createdAt: "", id: "", title: "", updatedAt: "" },
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
      const toDoDetail = state.toDoList.find(
        (todo) => todo.id === action.payload.id
      );

      if (toDoDetail) {
        state.toDoDetail = toDoDetail;
      }
    },
  },
});

export const toDoAction = toDoSlice.actions;
export default toDoSlice.reducer;
