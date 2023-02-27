import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MeJt3SJ6p54l9omPgb5AncZiaSDLWeAo2fHshhtiQQtFEsMnrwtBaclaywkiNnJeRzSJaHlIWahDqkqz2q6Y9YN00C9HVhIbt";

  const ontoken = (token) => {
    console.log(token);
    alert("payment successfull");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay now"
        name="crown clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $ ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={ontoken}
        stripeKey={publishableKey}
        currency="INR"
      />
    </div>
  );
};

export default StripeButton;
