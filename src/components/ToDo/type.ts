export interface IToDoLayoutProps {
  isShowModal: boolean;
  onShowModal: () => void;
  onCloseModal: () => void;
}

export type IAddToDoModalProps = Pick<
  IToDoLayoutProps,
  "isShowModal" | "onCloseModal"
>;

export type IToDoListProps = Pick<IToDoLayoutProps, "onShowModal">;
