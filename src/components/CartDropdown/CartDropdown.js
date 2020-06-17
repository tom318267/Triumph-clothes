import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="CartDropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
