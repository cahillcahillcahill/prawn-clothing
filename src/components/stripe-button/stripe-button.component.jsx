import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, history, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HhIbbFshLbTAHv0oqisDQjiO7BMnM29fBOQYuzDdJ8w9UoOk8rFH51mW3c8Vxl0s0ekzX6oDKA3vApOlASC3MgA00mehi2jCu";

  const onToken = (token) => {
    // alert("Payment Succesful!");
    clearCart();
    console.log(token);
    history.push("/");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Prawn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
);
