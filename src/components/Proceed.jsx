import React from "react";
import classes from "./Proceed.module.css";
import { Link } from "react-router-dom";

const Proceed = () => {
  return (
    <div className={classes.proceed}>
      <center>
        <Link to="/body2">
          <button className={classes.proceed_btn}>Proceed</button>
        </Link>
      </center>
    </div>
  );
};

export default Proceed;
