import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const Lion = require("../../assets/lion.png");
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_UVobHw2eUhAXx2VMf3wBZZMt00l556a7Bs";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Triumph Clothing"
        billingAddress
        shippingAddress
        image={Lion}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
