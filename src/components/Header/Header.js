import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./Header.scss";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="nav-item">
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="nav-item">
            SIGN IN
          </Link>
        )}
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  );
};

export default Header;
