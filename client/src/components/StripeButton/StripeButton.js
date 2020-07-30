import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearCart } from "../../redux/cart/cart.actions";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price, history, clearCart }) => {
  const Lion = require("../../assets/lion.png");
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_UVobHw2eUhAXx2VMf3wBZZMt00l556a7Bs";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
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

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
);
