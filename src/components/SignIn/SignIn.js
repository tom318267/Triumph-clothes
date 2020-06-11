import React from "react";
import "./SignIn.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
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
        <h2>I arleady have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <label>Email</label>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
