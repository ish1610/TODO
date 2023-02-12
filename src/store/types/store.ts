import { LoginSliceState } from "../../components/Features/Auth/Types/login";
import { SignUpSliceState } from "../../components/Features/Auth/Types/signUp";
import {
  ToDoListSliceState,
  ToDoModalSliceState,
} from "../../components/Features/ToDo/Types/todos";
import { ToDoDetailSliceState } from "../../components/Features/ToDoDetail/Types/toDoDetail";

export type Store = {
  toDoList: ToDoListSliceState;
  toDoDetail: ToDoDetailSliceState;
  toDoModal: ToDoModalSliceState;
  login: LoginSliceState;
  signUp: SignUpSliceState;
};
