import React from "react";

export type ToDo = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  uId: string;
};

export type ToDoInputValue = Pick<ToDo, "title" | "content">;

export interface IToDoLayoutProps {
  isShowModal: boolean;
  onShowModal: () => void;
  onCloseModal: () => void;
}

export interface IToDoListProps {
  onShowModal: () => void;
  toDoList?: ToDo[];
}

export interface IAddToDoModalProps {
  isShowModal: boolean;
  onCloseModal: () => void;
}
export interface IAddToDoModalViewProps {
  isShowModal: boolean;
  children?: React.ReactNode;
  onClickCancel: () => void;
  onChangeTitle: (e: any) => void;
  onChangeContent: (e: any) => void;
}

export interface IToDoItemProps {
  onClickDelete: (id: string) => void;
  onClickDetail: (id: string) => void;
  toDo: ToDo;
}

export type AddToDoBtn = { disabledAddToDo: boolean };

export type OnCloseModal = (
  setShowModalCb: (isShow: boolean) => void,
  setTitleCb: (title: string) => void,
  setContentCb: (content: string) => void
) => void;

export type ToDoAPI = {
  createToDo: (toDo: ToDoInputValue) => Promise<ToDo>;
  getToDo: () => Promise<ToDo[] | undefined>;
  deleteToDo: (id: string) => Promise<null>;
  updateToDo: (toDo: ToDo) => Promise<ToDo>;
};
