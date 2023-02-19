import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducers/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains product to add
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found increment quantity
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  // return new array when the array is empty
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find the existing item
  const itemToUpdate = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (itemToUpdate.quantity < 2)
    return cartItems.filter((cartItem) => cartItem.id !== itemToUpdate.id);

  // decrement the quantity
  return cartItems.map((cartItem) =>
    cartItem.id === itemToUpdate.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

const calculateCartCount = (cartItems) => {
  return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
};

const calculateTotalPrice = (cartItems) =>
  cartItems.reduce((total, acc) => {
    return (total += acc.quantity * acc.price);
  }, 0);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  deleteCartItem: () => {},
  totalPrice: 0,
});

const INITAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

export const CART_ACTION_TYPES = {
  TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, totalPrice }, dispatch] =
    useReducer(cartReducer, INITAL_STATE);

  const setIsCartOpen = (cartOpen) => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, cartOpen));
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = calculateCartCount(newCartItems);
    const newCartTotal = calculateTotalPrice(newCartItems);
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: newCartTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const deleteCartItem = (productToDelete) => {
    const newCartItems = deleteItem(cartItems, productToDelete);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    deleteCartItem,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
