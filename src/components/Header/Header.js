import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="options">
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link to="/about" className="nav-item">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-item">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
