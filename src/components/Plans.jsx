import React from "react";
import classes from "./Plans.module.css";

import Plan1 from "./Plan1";
import Plan2 from "./Plan2";
import Plan3 from "./Plan3";

const Plans = ({ showTime, setShowTime, setCurrentDate, currentDate }) => {
  return (
    <div className={classes.plans} style={{ width: "content-fit" }}>
      <Plan1
        showTime={showTime}
        setShowTime={setShowTime}
        setCurrentDate={setCurrentDate}
        currentDate={currentDate}
      />
      <Plan2 showTime={showTime} setShowTime={setShowTime} />
      <Plan3 showTime={showTime} setShowTime={setShowTime} />
    </div>
  );
};

export default Plans;
