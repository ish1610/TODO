import { createSlice } from "@reduxjs/toolkit";

import { ToDoListState } from "../../components/ToDo/types/todos";

const initialToDoState: ToDoListState = {
  toDoList: [],
  toDoDetail: {
    content: "",
    createdAt: "",
    id: "",
    title: "",
    updatedAt: "",
    uId: "",
  },
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
    detailToDo: (state, action) => {
      const toDoDetail = state.toDoList.find(
        (todo) => todo.id === action.payload.id
      );

      if (toDoDetail) {
        state.toDoDetail = toDoDetail;
      }
    },
    changeToDoDetailTitle: (state, action) => {
      state.toDoDetail.title = action.payload;
    },
    changeToDoDetailContent: (state, action) => {
      state.toDoDetail.content = action.payload;
    },
  },
});

export const toDoAction = toDoSlice.actions;
export default toDoSlice.reducer;
