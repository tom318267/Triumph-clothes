import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <button className="CustomButton" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
