import React from "react";
import classes from "./Proceed.module.css";

const Proceed = () => {
  return (
    <div className={classes.proceed}>
      <center>
        <button disabled className={classes.proceed_btn}>
          Proceed
        </button>
      </center>
    </div>
  );
};

export default Proceed;
