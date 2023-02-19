import React, { Fragment, useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { CartContext } from "../../contexts/cartContext";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selctor";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./Navigation.styles.scss";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link">Sign Out</span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
