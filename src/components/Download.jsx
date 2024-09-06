import React, { useState } from "react";
import classes from "./Download.module.css";

const Download = () => {
  const [booking, setBooking] = useState(false);

  const handleClick = () => {
    setBooking(true);
    console.log("sahu");
  };
  return (
    <div className={classes.download}>
      <div>
        <h3 className={classes.title}>Download Your Ticket</h3>
      </div>
      <div className={classes.description}>
        <h4 className={classes.book}>Enter Booking ID, Mobile No, Email</h4>
        <div className={classes.container}>
          <input
            type="text"
            placeholder="Enter Booking ID, Mobile No, Email"
            className={classes.place}
          />
          <button className={classes.search} onClick={() => handleClick()}>
            SEARCH
          </button>
        </div>
      </div>
      {booking && (
        <p className={classes.error}>Sorry !! There is no any booking.</p>
      )}
    </div>
  );
};

export default Download;
