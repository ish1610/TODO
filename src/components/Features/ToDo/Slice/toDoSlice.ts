import { createSlice } from "@reduxjs/toolkit";
import { Store } from "../../../../store/types/store";
import { ToDoListSliceState } from "../Types/todos";

const initialToDoState: ToDoListSliceState = {
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
  },
});

export const { createToDo, getToDoList, deleteToDo } = toDoSlice.actions;

export const selectTodoList = (state: Store) => state.toDoList.toDoList;

export default toDoSlice.reducer;
