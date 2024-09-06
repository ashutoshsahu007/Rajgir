import React from "react";
import classes from "./Other.module.css";

const Other = () => {
  return (
    <div className={classes.other}>
      <div className={classes.other2}>
        <p>
          <label className={classes.label}>Select Your Safari Time Slot</label>
          <p className={classes.para}>
            Reserve Your Safari Adventure: Book Your Preferred Time Slot Now!
          </p>
        </p>
      </div>
    </div>
  );
};

export default Other;
