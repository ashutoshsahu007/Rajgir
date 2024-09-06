import React, { useContext, useState } from "react";
import classes from "./Other.module.css";
import { createContext, Provider } from "react";
import { TouristDataProvider } from "../App";

const Other = ({ showTime, setShowTime, currentDate }) => {
  const [color, setColor] = useState();

  const { touristData, setTouristData } = useContext(TouristDataProvider);

  const visitingTime = [
    { time: "10:00 AM-11AM" },
    { time: "11:00 AM- 12 PM" },
    { time: "01 PM - 02 PM" },
  ];

  return (
    <div className={classes.other}>
      <div className={classes.other2}>
        <label className={classes.label}>Select Your Safari Time Slot</label>
        <p className={classes.para}>
          Reserve Your Safari Adventure: Book Your Preferred Time Slot Now!
        </p>
        {showTime && currentDate && (
          <div>
            {touristData.plan === 1 && (
              <button
                style={{
                  padding: "5px",
                  margin: "5px",
                  borderRadius: "5px",
                  backgroundColor: `${
                    color === 1 ? "rgb(25, 118, 210)" : "white"
                  }`,
                  color: `${color === 1 ? "white" : "rgb(25, 118, 210)"}`,
                }}
                onClick={() => {
                  setColor(1);
                  setTouristData({
                    ...touristData,
                    visitingTime: visitingTime[0].time,
                  });
                }}
              >
                {visitingTime[0].time}
              </button>
            )}
            {(touristData.plan === 1 || touristData.plan === 2) && (
              <button
                style={{
                  padding: "5px",
                  margin: "5px",
                  borderRadius: "5px",
                  backgroundColor: `${
                    color === 2 ? "rgb(25, 118, 210)" : "white"
                  }`,
                  color: `${color === 2 ? "white" : "rgb(25, 118, 210)"}`,
                }}
                onClick={() => {
                  setColor(2);
                  setTouristData({
                    ...touristData,
                    visitingTime: visitingTime[1].time,
                  });
                }}
              >
                {visitingTime[1].time}
              </button>
            )}
            {(touristData.plan === 1 || touristData.plan === 2) && (
              <button
                style={{
                  padding: "5px",
                  margin: "5px",
                  borderRadius: "5px",
                  backgroundColor: `${
                    color === 3 ? "rgb(25, 118, 210)" : "white"
                  }`,
                  color: `${color === 3 ? "white" : "rgb(25, 118, 210)"}`,
                }}
                onClick={() => {
                  setColor(3);
                  setTouristData({
                    ...touristData,
                    visitingTime: visitingTime[2].time,
                  });
                }}
              >
                {visitingTime[2].time}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Other;
