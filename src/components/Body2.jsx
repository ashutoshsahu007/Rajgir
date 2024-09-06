import React, { useState } from "react";
import classes from "./Body2.module.css";
import { Link } from "react-router-dom";
import { HiArrowCircleUp } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import Modal2 from "../Booth/Modal2";

const Body2 = () => {
  const [showPreview, setShowPreview] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.body2}>
      <div className={classes.preview}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => setShowPreview(!showPreview)}
        >
          <h1 className={classes.pre}>Preview</h1>
          <h1 style={{ marginRight: "20px", marginTop: "14px" }}>
            <HiArrowSmUp />
          </h1>
        </div>
        {showPreview && (
          <div className={classes.section}>
            <div className={classes.div1}>Visiting Date:</div>
            <div className={classes.div1}>Number of Adults:</div>
            <div className={classes.div1}>Number of Children:</div>
            <div className={classes.div1}>Number of Infants:</div>
          </div>
        )}
      </div>
      <div className={classes.visitor}>
        <h1 className={classes.pre}>Visitor Details</h1>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "5px",
              color: "blue",
              backgroundColor: "rgb(203, 216, 233)",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            Adults
          </div>
          <div
            style={{
              padding: "5px",
              color: "blue",
              backgroundColor: "rgb(203, 216, 233)",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            children
          </div>
        </div>
        <div>
          <button
            style={{
              padding: "10px",
              color: "blue",
              backgroundColor: "rgb(203, 216, 233)",
              borderRadius: "5px",
              margin: "10px",
            }}
            onClick={() => setShowModal(true)}
          >
            + Add adults
          </button>
          <button
            style={{
              padding: "10px",
              color: "blue",
              backgroundColor: "rgb(203, 216, 233)",
              borderRadius: "5px",
              margin: "10px",
            }}
            onClick={() => setShowModal(true)}
          >
            + Add Child
          </button>
        </div>
      </div>
      <div className={classes.details}>
        <h4
          style={{
            marginLeft: "30px",
            paddingTop: "10px",
            color: "rgb(70 145 242)",
            fontSize: "20px",
          }}
        >
          Communication Details
        </h4>
        <div style={{ margin: "10px" }}>
          <input
            type="emial"
            placeholder="Email"
            style={{ padding: "10px", marign: "5px" }}
          />
          <input
            type="number"
            placeholder="Mobile"
            style={{ padding: "10px", margin: "10px" }}
          />
        </div>
        <h4
          style={{
            marginLeft: "30px",
            paddingTop: "10px",
            color: "rgb(70 145 242)",
            fontSize: "20px",
          }}
        >
          Identity Proof
        </h4>
        <div style={{ margin: "10px", display: "flex" }}>
          <div style={{ marginLeft: "10px" }}>
            <select id="select1" style={{ padding: "10px", marign: "5px" }}>
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="option1">Aadhar</option>
            </select>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <select id="select2" style={{ padding: "10px", marign: "5px" }}>
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="option1">Aadhar</option>
              <option value="option2">Passport</option>
              <option value="option3">Driving Licence</option>
              <option value="option3">Bank Passbook</option>
            </select>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <input
              type="text"
              placeholder="Proof Number"
              style={{ padding: "10px", marign: "5px" }}
            />
          </div>
        </div>
      </div>
      <div className={classes.submit}>
        <Link to="/">
          <button
            style={{
              padding: "8px",
              margin: "10px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Back
          </button>
        </Link>
        <Link to="/body3">
          <button
            style={{
              padding: "8px",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Save & Continue
          </button>
        </Link>
      </div>
      {showModal && <Modal2 onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Body2;
