import styled from "@emotion/styled";
import { blue } from "@mui/material/colors";
import React from "react";
import { boxShadow } from "../../styles/commonColor";
import { IModalViewProps } from "../../types/modal";

const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  border: 1px solid ${blue};
  border-radius: 5px;
  background-color: #fff;
  box-shadow: ${boxShadow};
`;

const ModalView = ({ isShowModal, onClickCancel }: IModalViewProps) => {
  return (
    <React.Fragment>
      {isShowModal && <BackDrop onClick={onClickCancel} />}
      {isShowModal && (
        <Modal>
          <h2>정말삭제하시겠습니까?</h2>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ModalView;
