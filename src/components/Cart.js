import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  return (
    <div className="text-center">
      <h1 className=" text-3xl">Cart</h1>
      {cartItems.length == 0 ? (
        <h1 className="text-2xl">Your cart is empty!</h1>
      ) : (
        <button
          data-testid="clearCart"
          name="Clear Cart"
          onClick={handleClearCart}
          className="p-4 m-4 bg-green-700 text-white hover:bg-green-400"
        >
          Clear Cart
        </button>
      )}
      <CartList items={cartItems} />
    </div>
  );
};
export default Cart;
