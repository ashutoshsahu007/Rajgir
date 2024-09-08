import React from "react";
import classes from "./Payment.module.css";

const Payment = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      <div className={classes.div1}>
        <div className={classes.seca}>
          <h1>Attraction For Adults</h1>
          <h2>Safari Experience</h2>
          <button>Herbivore Safari</button>
          <button>Tiger Safari</button>
          <button>Forest Safari</button>
          <h2>WildLife Observation</h2>
          <button>Aviary</button>
        </div>
        <div className={classes.secb}>
          <h1>Attraction For Adults</h1>
          <h2>Safari Experience</h2>
          <button>Herbivore Safari</button>
          <button>Tiger Safari</button>
          <button>Forest Safari</button>
          <h2>WildLife Observation</h2>
          <button>Aviary</button>
        </div>
        <div className={classes.secc}>
          <h1>Your Ticket summary</h1>
          <p>Package name : Integrated Safari</p>
          <p>Number Of adults: 2</p>
          <p>Number Of Children: 1</p>
          <p>Date of visiting : 10 september</p>
          <p>Visiting Time : 01 PM - 02 PM </p>
          <h2 className={classes.price}>Total Price : $1940</h2>
          <button className={classes.btn}>Pay Now </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
