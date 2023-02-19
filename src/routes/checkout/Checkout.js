import React, { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description </div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${totalPrice}</span>
    </div>
  );
};

export default Checkout;
