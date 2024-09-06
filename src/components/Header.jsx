import React from "react";
import classes from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <img
          src="src\assets\logo.png"
          alt="imgae not found"
          className={classes.logo}
        />
      </div>
      {/* Navbar images section */}
      <div className={classes.other}>
        <div className={classes.item}>
          <a href="/">Home</a>
        </div>
        <div className={classes.item}>
          <a href="/download">
            <button className={classes.btn}>Download Ticket</button>
          </a>
        </div>
        <div className={classes.item}>
          <img
            src="src\assets\naturelogo.png"
            alt="image not found"
            className={classes.logo2}
          />
        </div>
      </div>
      <RxHamburgerMenu
        className={classes.hamburgerBtn}
        style={{ height: "25px", width: "25px", cursor: "pointer" }}
      />
    </div>
  );
};

export default Header;
