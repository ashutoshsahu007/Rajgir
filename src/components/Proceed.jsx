import React, { useContext } from "react";
import classes from "./Proceed.module.css";
import { Link } from "react-router-dom";
import { TouristDataProvider } from "../App";

const Proceed = () => {
  const { touristData } = useContext(TouristDataProvider);

  const handleClick = () => {
    if (!touristData.visitingDate) {
      alert("Select The Date First");
    } else if (!touristData.visitingTime) {
      alert("Select The Time First");
    }
  };
  return (
    <div className={classes.proceed}>
      <center>
        <Link
          onClick={() => console.log(touristData.visitingTime)}
          to={`${touristData.visitingTime ? "/body2" : "/"}`}
        >
          <button className={classes.proceed_btn} onClick={handleClick}>
            Proceed
          </button>
        </Link>
      </center>
    </div>
  );
};

export default Proceed;
