import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="SignIn">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  onChange={this.handleChange}
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  value={this.state.email}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  className="input"
                  value={this.state.password}
                  data-type="password"
                />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" checked />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <CustomButton
                  onClick={this.handleSubmit}
                  type="submit"
                  className="button"
                >
                  Sign In
                </CustomButton>
                <CustomButton
                  style={{ marginTop: "20px", paddingTop: "10px" }}
                  onClick={signInWithGoogle}
                  className="button"
                >
                  Sign in with
                  <img
                    style={{
                      width: "20px",
                      position: "relative",
                      top: "4px",
                      left: "5px",
                    }}
                    alt="google"
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                  />
                </CustomButton>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  value={this.state.password}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  value={this.state.confirmPassword}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input type="text" className="input" />
              </div>
              <div className="group">
                <CustomButton
                  onClick={this.handleSubmit}
                  type="submit"
                  className="button"
                >
                  Sign Up
                </CustomButton>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
