import React from "react";
import classes from "./Bottom.module.css";

const Bottom = () => {
  return (
    <footer className={classes.bottom}>
      <img src="src\assets\logo.png" className={classes.logo} />
      <div className={classes.text}>
        <p className={classes.para}>
          Copyright © 2024 All Rights Reserved | Rajgir Zoo Safari & Nature
          Safari
        </p>
        <p className={classes.para}>
          Designed, Developed & Maintained By Fillip Technologies
        </p>
      </div>
      <div className={classes.icons}>
        <div>
          <img src="src\assets\facebook.png" className={classes.icon} />
        </div>
        <div>
          <img src="src\assets\youtube.png" className={classes.icon} />
        </div>
        <div>
          <img src="src\assets\instagram.png" className={classes.icon} />
        </div>
        <div>
          <img src="src\assets\twitter.png" className={classes.icon} />
        </div>
        <div>
          <img src="src\assets\linkedin.png" className={classes.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
