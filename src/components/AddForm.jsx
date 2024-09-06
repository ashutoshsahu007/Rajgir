import React from "react";

const AddForm = ({ onClose }) => {
  return (
    <div>
      <h2 style={{ margin: "20px" }}>Add Adult</h2>
      <div>
        <input
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
        <input
          type="name"
          placeholder="Gender"
          style={{
            width: "80%",
            margin: "10px",
            marginLeft: "30px",
            padding: "15px",
          }}
        />
      </div>
      <div>
        <input
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
        <button style={{ marginTop: "10px" }} onClick={onClose}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddForm;
