import { ToDo } from "../../components/ToDo/types/todos";

export type ToDoListState = {
  toDoList: ToDo[];
  toDoDetail: ToDo;
};

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
  toDoList: ToDoListState;
  toDoModal: ToDoModalState;
  login: LoginState;
  signUp: SignUpState;
};
