import React, { useState, useEffect } from "react";

import ReactModal from "react-modal";
import { ModalProps } from "../../types";

const Modal: React.FC<ModalProps> = ({
  children,
  isModalOpen,
  onRequestClose,
}) => {
  const [modalStatus, setModalStatus] = useState(isModalOpen);

  useEffect(() => {
    setModalStatus(isModalOpen);
  }, [isModalOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={onRequestClose}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "576px",
          border: "none",
          padding: "36px"
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
