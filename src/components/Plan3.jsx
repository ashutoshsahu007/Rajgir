import React, { useContext, useState } from "react";
import { TouristDataProvider } from "../App";
import classes from "./Plan3.module.css";

const Plan3 = ({ showTime, setShowTime, setCurrentDate, currentDate }) => {
  const { touristData, setTouristData } = useContext(TouristDataProvider);

  const handleClick = () => {
    if (!touristData.visitingDate) {
      alert("Visiting Date Required");
    } else if (touristData.childCount) {
      alert("Children are not Allowed on This Package");
    } else {
      setTouristData({
        ...touristData,
        plan: 3,
        planPriceAdult: 500,
        planPriceChild: 453,
      });
      setShowTime(true);
    }
  };
  return (
    <div className={classes.plan} onClick={() => handleClick()}>
      <img src="2.png" className={classes.img} />
      <div className={classes.value}>
        <div className={classes.name}>
          <h2 className={classes.int}>Nature Safari</h2>
          <p className={classes.saf}>Nature Safari</p>
        </div>
        <div>
          <div>
            <div className={classes.paisa}>₹</div>
            <div className={classes.two}>
              <label className={classes.money}>850</label>
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

export default Plan3;
