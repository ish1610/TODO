import { LoginState } from "../../components/Auth/types/login";
import {
  ToDoListState,
  ToDoModalState,
} from "../../components/ToDo/types/todos";

export type Store = {
  toDoList: ToDoListState;
  toDoModal: ToDoModalState;
  login: LoginState;
};
