import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Store } from "../../../../store/types/store";
import { toDoAPI } from "../Api/toDo";
import { ToDoListSliceState } from "../Types/todos";

const initialToDoState: ToDoListSliceState = {
  toDoList: [],
};

export const getToDoListAsync = createAsyncThunk(
  "toDo/fetchToDoList",
  async () => {
    const toDoList = await toDoAPI.getToDo();

    return toDoList;
  }
);

export const deleteToDoAsync = createAsyncThunk(
  "toDo/fetchDeleteToDo",
  async (id: string) => {
    const response = await toDoAPI.deleteToDo(id);

    if (response === null) {
      return id;
    }
  }
);

export const createToDoAsync = createAsyncThunk(
  "toDo/createToDo",
  async (createTodoContents: { title: string; content: string }) => {
    const newToDo = await toDoAPI.createToDo(createTodoContents);

    return newToDo;
  }
);

const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialToDoState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getToDoListAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.toDoList = action.payload;
        }
      })
      .addCase(deleteToDoAsync.fulfilled, (state, action) => {
        const id = action.payload;
        if (id) {
          const filtedToDo = state.toDoList.filter((toDo) => toDo.id !== id);

          state.toDoList = filtedToDo;
        }
      })
      .addCase(createToDoAsync.fulfilled, (state, action) => {
        state.toDoList.push(action.payload);
      });
  },
});

export const selectTodoList = (state: Store) => state.toDoList.toDoList;

export default toDoSlice.reducer;
