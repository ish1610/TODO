export type ToDo = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
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
  isDisabledAddToDo: boolean;
  onClickAddToDo: () => void;
  onClickCancel: () => void;
  onChangeTitle: (e: any) => void;
  onChangeContent: (e: any) => void;
}

export interface IToDoItemProps {
  onClickDelete: (id: string) => void;
  onClickDetail: (id: string) => void;
  toDo: ToDo;
}

export interface ITodoDetailProps {
  toDoDetail: ToDo;
  isEdit: boolean;
  // toDoInput: ToDoInputValue;
  isDisabledEditToDo: boolean;
  onClickCancel: () => void;
  onClickEdit: () => void;
  onClickSave: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type AddToDoBtn = { disabledAddToDo: boolean };

export type OnCloseModal = (
  setShowModalCb: (isShow: boolean) => void,
  setTitleCb: (title: string) => void,
  setContentCb: (content: string) => void
) => void;

export type ToDoListState = {
  toDoList: ToDo[];
  toDoDetail: ToDo;
};

export type ToDoModalState = {
  isShowDeleteModal: boolean;
};

export type GetToDoCb = (toDoList: ToDo[]) => void;
export type CreateToDoCb = (toDo: ToDo) => void;
export type DeleteToDoCb = (toDoId: string) => void;
