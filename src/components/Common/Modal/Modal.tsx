import { IModalViewProps } from "../types/modal";
import ModalView from "./Views/ModalView";

const Modal = ({ isShowModal, onClickCancel }: IModalViewProps) => {
  const modalProps: IModalViewProps = {
    isShowModal,
    onClickCancel: () => onClickCancel(),
  };
  return <ModalView {...modalProps}></ModalView>;
};

export default Modal;
