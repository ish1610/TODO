import { ToDoListSliceState } from "../../components/Features/ToDo/Types/todos";
import { ToDoDetailSliceState } from "../../components/Features/ToDoDetail/Types/toDoDetail";

export type ToDoModalState = {
  isShowDeleteModal: boolean;
};

export type LoginState = {
  isLogin: boolean;
  feedbackMessage: string;
  tokenData: { token: string; duration: number };
};

export type SignUpState = {
  feedbackMessage: string;
};

export type Store = {
  toDoList: ToDoListSliceState;
  toDoDetail: ToDoDetailSliceState;
  toDoModal: ToDoModalState;
  login: LoginState;
  signUp: SignUpState;
};
