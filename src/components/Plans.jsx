import React from "react";
import classes from "./Plans.module.css";
import Plan from "./Plan";
import Plan1 from "./Plan1";

const Plans = () => {
  return (
    <div className={classes.plans} style={{ width: "content-fit" }}>
      <Plan1 />
      <Plan />
      <Plan />
    </div>
  );
};

export default Plans;
