import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import {
  googleSignInStart,
  emailSignInStart,
  signUpStart,
} from "../../redux/user/user.actions";
import "./SignIn.scss";

class SignInAndSignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleSignUpSubmit = async (e) => {
    e.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });

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
    const { googleSignInStart } = this.props;
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
                  required
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
                  required
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <CustomButton
                  onClick={this.handleSignInSubmit}
                  type="submit"
                  className="button"
                >
                  Sign In
                </CustomButton>
                <CustomButton
                  type="button"
                  style={{ marginTop: "20px", paddingTop: "10px" }}
                  onClick={googleSignInStart}
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
                <label htmlFor="displayName" className="label">
                  Display Name
                </label>
                <input
                  name="displayName"
                  onChange={this.handleChange}
                  type="text"
                  className="input"
                  value={this.state.displayName}
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="label">
                  Email Address
                </label>
                <input
                  name="email"
                  onChange={this.handleChange}
                  type="email"
                  className="input"
                  value={this.state.email}
                  required
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
                  data-type="password"
                  value={this.state.password}
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  onChange={this.handleChange}
                  type="password"
                  className="input"
                  data-type="password"
                  value={this.state.confirmPassword}
                  required
                />
              </div>

              <div className="group">
                <CustomButton
                  onClick={this.handleSignUpSubmit}
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

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignInAndSignUp);
