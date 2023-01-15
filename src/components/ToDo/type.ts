export interface IToDoLayoutProps {
  isShowModal: boolean;
  onShowModal: () => void;
  onCloseModal: () => void;
}

export type IToDoListProps = Pick<IToDoLayoutProps, "onShowModal">;

export interface IAddToDoModalProps {
  isShowModal: boolean;
  onCloseModal: () => void;
  onChangedTitle?: (e: any) => void;
  onChangedContent?: (e: any) => void;
  disabledAddToDo?: boolean;
}

export type AddToDoBtn = { disabledAddToDo: boolean };
