import React from "react";
import { useRef } from "react";
import AddPerson from "../components/AddPerson";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      style={{
        inset: "0px",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(1px)",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "360px",
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        <AddPerson onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal;
