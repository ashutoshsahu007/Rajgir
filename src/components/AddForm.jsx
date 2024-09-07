import React, { useRef, useContext } from "react";
import { TouristDataProvider } from "../App";

const AddForm = ({ onClose, adultVisitCount, childrenVisitCount, value }) => {
  const nameRef = useRef("");
  const genderRef = useRef("");
  const ageRef = useRef("");
  const { touristData, setTouristData } = useContext(TouristDataProvider);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(genderRef.current.value);
        console.log(ageRef.current.value);

        onClose();
      }}
    >
      <h2 style={{ margin: "20px" }}>{value}</h2>
      <div>
        <input
          required
          ref={nameRef}
          type="numeber"
          placeholder="Name"
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
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option3">Other</option>
        </select>
      </div>
      <div>
        <input
          required
          ref={ageRef}
          type="age"
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
          style={{ marginRight: "10px", marginTop: "10px" }}
          onClick={onClose}
        >
          cancle
        </button>
        <button type="submit" style={{ marginTop: "10px" }}>
          save
        </button>
      </div>
    </form>
  );
};

export default AddForm;
