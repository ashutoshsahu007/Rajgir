import React from "react";
import classes from "./Body2.module.css";

const Body2 = () => {
  return (
    <div className={classes.body2}>
      <div className={classes.preview}>
        <h1 className={classes.pre}>Preview</h1>
        <div className={classes.section}>
          <div className={classes.div1}>Visiting Date:</div>
          <div className={classes.div1}>Number of Adults:</div>
          <div className={classes.div1}>Number of Children:</div>
          <div className={classes.div1}>Number of Infants:</div>
        </div>
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
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            placeholder="Person"
            style={{ padding: "10px", marign: "5px" }}
          />
          <input
            type="text"
            placeholder="Proof Type"
            style={{ padding: "10px", marign: "5px" }}
          />
          <input
            type="number"
            placeholder="Proof Number"
            style={{ padding: "10px", marign: "5px" }}
          />
        </div>
      </div>
      <div className={classes.submit}>
        <button
          style={{
            padding: "5px",
            margin: "10px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Back
        </button>
        <button
          style={{ padding: "5px", backgroundColor: "blue", color: "white" }}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Body2;
