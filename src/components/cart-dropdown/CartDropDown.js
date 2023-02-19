import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

import "./CartDropDown.styless.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
