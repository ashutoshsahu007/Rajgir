import React from "react";
import { useRef, useContext } from "react";
import AddForm from "../components/AddForm";
import { TouristDataProvider } from "../App";

const Modal2 = ({
  onClose,
  childrenVisitCount,
  adultVisitCount,
  unKnown,
  editStatus,
  setEditStatus,
  category,
  setAdultAdd,
  setChildAdd,
}) => {
  const modalRef = useRef();
  const { touristData, setTouristData } = useContext(TouristDataProvider);

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
        <AddForm
          onClose={onClose}
          childrenVisitCount={childrenVisitCount}
          adultVisitCount={adultVisitCount}
          unKnown={unKnown}
          editStatus={editStatus}
          setEditStatus={setEditStatus}
          category={category}
          setAdultAdd={setAdultAdd}
          setChildAdd={setChildAdd}
        />
      </div>
    </div>
  );
};

export default Modal2;
