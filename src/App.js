import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Shop from "./components/Shop/Shop";
import SignInAndSignUpPage from "./components/SignIn-and-SignUp/SignIn-and-SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
