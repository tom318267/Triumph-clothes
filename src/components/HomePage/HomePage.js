import React from "react";
import Directory from "../Directory/Directory";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="company tracking-in-expand">TRIUMPH CLOTHING INC.</h1>
      <h2 className="lead text-focus-in">For your authentic self.</h2>
      <Directory />
    </div>
  );
};

export default HomePage;
