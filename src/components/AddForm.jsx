import React, { useRef, useContext } from "react";
import { TouristDataProvider } from "../App";

const AddForm = ({
  onClose,
  adultVisitCount,
  childrenVisitCount,
  value,
  editStatus,
  setEditStatus,
  unKnown,
  category,
}) => {
  const nameRef = useRef("");
  const genderRef = useRef("");
  const ageRef = useRef("");
  const { touristData, setTouristData } = useContext(TouristDataProvider);
  // const { name, gender, age } = touristData?.visitorData[0];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (touristData?.visitorData) {
          setTouristData({
            ...touristData,
            visitorData: [
              {
                name: nameRef.current.value,
                gender: genderRef.current.value,
                age: ageRef.current.value,
                categoty: category,
              },
              ...touristData?.visitorData,
            ],
          });
        } else {
          setTouristData({
            ...touristData,
            visitorData: [
              {
                name: nameRef.current.value,
                gender: genderRef.current.value,
                age: ageRef.current.value,
                category: category,
              },
            ],
          });
        }

        onClose();
      }}
    >
      <h2 style={{ margin: "20px" }}>{unKnown} </h2>
      <div>
        <input
          required
          ref={nameRef}
          type="numeber"
          placeholder="Name"
          defaultValue={editStatus ? touristData?.visitorData[0]?.name : ""}
          style={{
            width: "80%",
            margin: "10px",
            marginLeft: "30px",
            padding: "15px",
          }}
        />
      </div>
      <div>
        <select
          required
          ref={genderRef}
          defaultValue={editStatus ? touristData?.visitorData[0]?.gender : ""}
          id="select2"
          style={{
            width: "87%",
            marign: "10px",
            marginLeft: "30px",
            padding: "15px",
          }}
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <input
          required
          ref={ageRef}
          type="age"
          defaultValue={editStatus ? touristData?.visitorData[0]?.age : ""}
          placeholder="Age"
          style={{
            width: "80%",
            margin: "10px",
            marginLeft: "30px",
            padding: "15px",
          }}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", marginRight: "20px" }}
      >
        <button
          style={{ marginRight: "10px", marginTop: "10px", cursor: "pointer" }}
          onClick={onClose}
        >
          cancle
        </button>
        <button
          type="submit"
          style={{ marginTop: "10px", cursor: "pointer" }}
          onClick={() => setEditStatus()}
        >
          save
        </button>
      </div>
    </form>
  );
};

export default AddForm;
