import React from "react";
import CartItems from "../Components/Cart/CartItems";
import CartLogin from "../Components/Cart/CartLogin";

const Cart = () => {
  return (
    <div>
      {/* if user don't login */}
      {/* <CartLogin /> */}
      {/* loged in */}
      <CartItems />
    </div>
  );
};

export default Cart;
