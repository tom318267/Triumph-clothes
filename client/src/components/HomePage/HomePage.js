import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Directory from "../Directory/Directory";
import "./HomePage.scss";
import { StyledToastContainer } from "./HomepageToast.styles";
import { selectSuccessLog } from "../../redux/user/user.selectors";

const HomePage = ({ loggedInSuccess }) => {
  toast.success("Successful login!");

  return (
    <div className="HomePage">
      {loggedInSuccess ? <StyledToastContainer /> : null}
      <h1 className="company tracking-in-expand">TRIUMPH CLOTHING</h1>
      <h2 className="lead text-focus-in">For your authentic self.</h2>
      <Directory />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loggedInSuccess: selectSuccessLog,
});

export default connect(mapStateToProps)(HomePage);
