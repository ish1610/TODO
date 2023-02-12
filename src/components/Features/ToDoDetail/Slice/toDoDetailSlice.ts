import { createSlice } from "@reduxjs/toolkit";
import { Store } from "../../../../store/types/store";
import { ToDo } from "../../ToDo/Types/todos";
import { ToDoDetailSliceState } from "../Types/toDoDetail";

const initialToDoState: ToDoDetailSliceState = {
  toDoDetail: {
    content: "",
    createdAt: "",
    id: "",
    title: "",
    updatedAt: "",
    uId: "",
  },
};

const toDoDetailSlice = createSlice({
  name: "toDoDetail",
  initialState: initialToDoState,
  reducers: {
    getDetailToDo: (state, action) => {
      const toDoDetail = action.payload.toDoList.find(
        (todo: ToDo) => todo.id === action.payload.id
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

export const { getDetailToDo, changeToDoDetailTitle, changeToDoDetailContent } =
  toDoDetailSlice.actions;

export const selectTodoDetail = (state: Store) => state.toDoDetail.toDoDetail;

export default toDoDetailSlice.reducer;
