import React, { useContext, useState } from "react";

import classes from "./Plan.module.css";

const Plan = ({ showTime, setShowTime }) => {
  const handleClick = () => {
    setShowTime(true);
  };
  return (
    <div className={classes.plan} onClick={() => setShowTime(true)}>
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
              <label className={classes.money}>300</label>
              <label>Per Adults</label>
            </div>
          </div>
        </div>
      </div>
      <button className={classes.button} onClick={() => handleClick()}>
        Select Plans
      </button>
      <div>
        <div className={classes.sec}>Zoo Storage</div>
        <div className={classes.sec2}>Animal Show</div>
      </div>
    </div>
  );
};

export default Plan;
