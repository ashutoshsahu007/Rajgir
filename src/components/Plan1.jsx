import React from "react";
import classes from "./Plan.module.css";

const Plan1 = () => {
  const handleClick = () => {
    alert("Visiting Date Required");
  };
  return (
    <div className={classes.plan}>
      <img src="src\assets\2.png" className={classes.img} />
      <div className={classes.value}>
        <div className={classes.name}>
          <h2 className={classes.int}>Integrated Safari</h2>
          <p className={classes.saf}>Integrated Safari</p>
        </div>
        <div>
          <div>
            <div className={classes.paisa}>₹</div>
            <div className={classes.two}>
              <label className={classes.money}>720</label>
              <label>Per Adults</label>
            </div>
          </div>
        </div>
      </div>
      <button className={classes.button} onClick={() => handleClick()}>
        Select Plans
      </button>
      <div>
        <div className={classes.sec}>
          <h4>Safari Experience</h4>
          <div>
            <p style={{ fontSize: "15px", margin: "3px" }}>Herbivore Safari</p>
            <p style={{ fontSize: "15px", margin: "3px" }}>Tiger Safari</p>
            <p style={{ fontSize: "15px", margin: "3px" }}>Forest Safari</p>
          </div>
        </div>
        <div className={classes.sec2}>
          <h4>Wildlife Observation</h4>
          <div>
            <p style={{ fontSize: "15px" }}>Aviary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan1;
