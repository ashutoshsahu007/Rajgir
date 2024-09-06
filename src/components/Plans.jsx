import React from "react";
import classes from "./Plans.module.css";
import Plan from "./Plan";
import Plan1 from "./Plan1";

const Plans = ({ showTime, setShowTime }) => {
  return (
    <div className={classes.plans} style={{ width: "content-fit" }}>
      <Plan1 showTime={showTime} setShowTime={setShowTime} />
      <Plan showTime={showTime} setShowTime={setShowTime} />
      <Plan showTime={showTime} setShowTime={setShowTime} />
    </div>
  );
};

export default Plans;
