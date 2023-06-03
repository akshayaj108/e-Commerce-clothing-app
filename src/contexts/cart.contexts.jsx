import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find cartItem exist in cartItems array by find method which return boolean value
  const isExistCartItem = cartItems.find((item) => item.id === productToAdd.id);
  //if cartItem exist in cartItems array means in cart then add cartItem by check using map method
  if (isExistCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...productToAdd, quantity: item.quantity + 1 }
        : item
    );
  }
  //if cartItems is empty then return empty cartItems array with productadd properties quantity
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  //find cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  //check if quantity is 1, then it is remove that item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  //if quantity is greater than 1 , then return cartItems array with reduced quantity.
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItemToRemove.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearCartItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearCartItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(() => {
    const newCount = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
    setCartCount(newCount);
  }, [cartItems]);
  useEffect(() => {
    const newTotalValue = cartItems.reduce((acc, cartItem) => {
      console.log(
        acc,
        "===================",
        cartItem.quantity,
        "====================",
        cartItem.price
      );
      return acc + cartItem.quantity * cartItem.price;
    }, 0);
    setCartTotal(newTotalValue);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearCartItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
