import React, { useContext } from "react";
import classes from "./Plan1.module.css";
import { useState } from "react";
import { GiHabitatDome } from "react-icons/gi";
import { TouristDataProvider } from "../App";

const Plan1 = ({ showTime, setShowTime, setCurrentDate, currentDate }) => {
  const { touristData, setTouristData } = useContext(TouristDataProvider);

  const handleClick = () => {
    if (!currentDate) {
      alert("Visiting Date Required");
    } else {
      setTouristData({
        ...touristData,
        plan: 1,
        planPriceAdult: 720,
        planPriceChild: 500,
      });
      setShowTime(true);
    }
  };

  return (
    <div className={classes.plan} onClick={() => handleClick()}>
      <img src="2.png" className={classes.img} />
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
