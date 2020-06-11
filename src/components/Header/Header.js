import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const Lion = require("../../assets/lion.png");
  return (
    <div className="Header">
      <div className="options">
        <Link to="/">
          <img className="logo" alt="lion" src={Lion} />
        </Link>
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link to="/about" className="nav-item">
          ABOUT
        </Link>
        <Link to="/signin" className="nav-item">
          SIGN UP
        </Link>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  );
};

export default Header;
