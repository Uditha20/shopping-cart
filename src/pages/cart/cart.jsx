import React, { useContext } from "react";
import  {PORDUCTS}  from "../../Products";
import { ShopContext } from "../../context/ShopContext";

import CartItem from "./CartItem";

import "./cart.css";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cart">
        {PORDUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          } else {
            return null; // Add a default return statement
          }
        })}
      </div>
    </div>
  );
}
