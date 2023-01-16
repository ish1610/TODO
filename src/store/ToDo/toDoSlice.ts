import { createSlice } from "@reduxjs/toolkit";
import { ToDoAPI } from "../../api/toDo";
import { ToDoListState } from "../../types/todos";

const initialToDoState: ToDoListState = {
  toDoList: [],
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialToDoState,
  reducers: {
    createToDo: (state, action) => {
      ToDoAPI.createToDo(action.payload);
      state.toDoList.push(action.payload);
    },
    getToDoList: (state, action) => {
      state.toDoList = action.payload;
    },
  },
});

export const toDoAction = toDoSlice.actions;
export default toDoSlice.reducer;
