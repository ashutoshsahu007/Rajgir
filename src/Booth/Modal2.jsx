import React from "react";
import { useRef } from "react";
import AddForm from "../components/AddForm";

const Modal2 = ({ onClose }) => {
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
        backdropFilter: "blur(1px)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "330px",
          backgroundColor: "white",
          borderRadius: "15px",
          border: "1px solid black",
        }}
      >
        <AddForm onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal2;
