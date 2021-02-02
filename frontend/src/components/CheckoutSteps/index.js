import React from 'react';
import './style.css';

function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}><p>Sign In</p></div>
      <div className={props.step2 ? 'active' : ''}><p>Shipping</p></div>
      <div className={props.step3 ? 'active' : ''}><p>Payment</p></div>
      <div className={props.step4 ? 'active' : ''}><p>PlaceOrder</p></div>
    </div>
  );
}

export default CheckoutSteps;
