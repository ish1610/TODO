export interface IToDoLayoutProps {
  isShowModal: boolean;
  onShowModal: () => void;
  onCloseModal: () => void;
}

export type IToDoListProps = Pick<IToDoLayoutProps, "onShowModal">;

export interface IAddToDoModalProps {
  isShowModal: boolean;
  onCloseModal: () => void;
}
export interface IAddToDoModalViewProps {
  isShowModal: boolean;
  disabledAddToDo: boolean;
  onClickCancel: () => void;
  onChangedTitle: (e: any) => void;
  onChangedContent: (e: any) => void;
}

export type AddToDoBtn = { disabledAddToDo: boolean };

export type OnCloseModal = (
  setShowModalCb: (isShow: boolean) => void,
  setTitleCb: (title: string) => void,
  setContentCb: (content: string) => void
) => void;

export type ToDoInputValue = {
  title: string;
  content: string;
};
