import React from "react";
import classes from "./Payment.module.css";

const Payment = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <div className={classes.div1}>
        <div className={classes.seca}>
          `
          <h3
            style={{
              fontSize: "22px",
              backgroundColor: "green",
              color: "white",
              height: "80px",
            }}
          >
            Attraction For Adults
          </h3>
          <h4>Safari Experience</h4>
          <p>
            <span>&#9989;</span>Herbivore Safari
          </p>
          <p>
            <span>&#9989;</span>Tiger Safari
          </p>
          <p>
            <span>&#9989;</span>Forest Safari
          </p>
          <h4>
            <span>&#9989;</span>WildLife Observation
          </h4>
          <p>
            <span>&#9989;</span>Aviary
          </p>
        </div>
        <div className={classes.secb}>
          <h3
            style={{
              fontSize: "22px",
              backgroundColor: "green",
              color: "white",
              height: "80px",
            }}
          >
            Attraction For Adults
          </h3>
          <div>
            <h4>Safari Experience</h4>
            <p>
              <span>&#9989;</span>Herbivore Safari
            </p>
            <p>
              <span>&#9989;</span>Tiger Safari
            </p>
            <p>
              <span>&#9989;</span>Forest Safari
            </p>
          </div>
          <h4>WildLife Observation</h4>
          <p>
            <span>&#9989;</span>Aviary
          </p>
        </div>
        <div className={classes.secc}>
          <h3 style={{ fontSize: "25px", marginBottom: "10px" }}>
            Your Ticket summary
          </h3>
          <p>Package Name: Integrated Safari</p>
          <p>Number Of adults: 2</p>
          <p>Number Of Children: 1</p>
          <p>Date of visiting : 10 september 2024</p>
          <p>Visiting Time : 01 PM - 02 PM </p>
          <h2 className={classes.price}>Total Price : $1940</h2>
          <button className={classes.btn}>Pay Now </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
