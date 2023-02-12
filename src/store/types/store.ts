import { LoginSliceState } from "../../components/Features/Auth/Types/login";
import { SignUpSliceState } from "../../components/Features/Auth/Types/signUp";
import {
  ToDoListSliceState,
  ToDoModalSliceState,
} from "../../components/Features/ToDo/Types/todos";
import { ToDoDetailSliceState } from "../../components/Features/ToDoDetail/Types/toDoDetail";

import { ThunkAction, Action } from "@reduxjs/toolkit";
import store from "../index";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type Store = {
  toDoList: ToDoListSliceState;
  toDoDetail: ToDoDetailSliceState;
  toDoModal: ToDoModalSliceState;
  login: LoginSliceState;
  signUp: SignUpSliceState;
};
