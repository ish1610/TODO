import { LoginState } from "../../components/Auth/types/login";
import { SignUpState } from "../../components/Auth/types/signUp";
import {
  ToDoListState,
  ToDoModalState,
} from "../../components/ToDo/types/todos";

export type Store = {
  toDoList: ToDoListState;
  toDoModal: ToDoModalState;
  login: LoginState;
  signUp: SignUpState;
};
