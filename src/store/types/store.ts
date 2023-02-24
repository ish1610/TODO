import { LoginSliceState } from "../../features/auth/types/login";
import { SignUpSliceState } from "../../features/auth/types/signUp";
import {
  ToDoListSliceState,
  ToDoModalSliceState,
} from "../../features/toDo/types/todos";
import { ToDoDetailSliceState } from "../../features/toDoDetail/types/toDoDetail";

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
