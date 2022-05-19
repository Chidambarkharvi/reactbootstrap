import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function CustomModal({ open, onCloseModal, children }) {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        onOverlayClick={onCloseModal}
      >
        {children}
      </Modal>
    </>
  );
}

export default CustomModal;
