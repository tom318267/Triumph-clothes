import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import "./Header.scss";

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon className="bag" />
      </div>

      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
