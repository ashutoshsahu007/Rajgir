import React from "react";
import classes from "./Bottom.module.css";

const Bottom = () => {
  return (
    <footer className={classes.bottom} style={{ display: "none" }}>
      <img src="logo.png" className={classes.logo} />
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
          <img src="facebook.png" className={classes.icon} />
        </div>
        <div>
          <img src="youtube.png" className={classes.icon} />
        </div>
        <div>
          <img src="instagram.png" className={classes.icon} />
        </div>
        <div>
          <img src="twitter.png" className={classes.icon} />
        </div>
        <div>
          <img src="linkedin.png" className={classes.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
