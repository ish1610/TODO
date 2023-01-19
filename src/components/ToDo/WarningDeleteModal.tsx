import React from "react";
import Modal from "../Common/Modal/Modal";

const WarningDeleteModal = ({ isShowDeleteModal, onCloseDeleteModal }: any) => {
  return (
    <Modal onClickCancel={onCloseDeleteModal} isShowModal={isShowDeleteModal} />
  );
};

export default WarningDeleteModal;
