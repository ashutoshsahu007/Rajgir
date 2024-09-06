import React, { useContext, useState } from "react";
import classes from "./Other.module.css";
import { createContext, Provider } from "react";

const Other = () => {
  const [showTime, setShowTime] = useState(true);
  const [color, setColor] = useState();

  return (
    <div className={classes.other}>
      <div className={classes.other2}>
        <label className={classes.label}>Select Your Safari Time Slot</label>
        <p className={classes.para}>
          Reserve Your Safari Adventure: Book Your Preferred Time Slot Now!
        </p>
        {showTime && (
          <div>
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
              onClick={() => setColor(1)}
            >
              10:00 AM-11AM
            </button>
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
              onClick={() => setColor(2)}
            >
              11:00 AM- 12 PM
            </button>
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
              onClick={() => setColor(3)}
            >
              01 PM - 02 PM
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Other;
