import React from "react";
import { useSelector } from "react-redux";
import CartItemHeadter from "./cartItemComponents/CartItemHeadter";
import ProductData from "./cartItemComponents/ProductData";
import CartItemFooter from "./cartItemComponents/CartItemFooter";
import { Divider } from "@mui/material";

const CartItems = () => {
  const cartItems = useSelector((state) => state.CartSlice.cartItems);

  return (
    <div className="m-4 ">
      {/* header before items */}
      <CartItemHeadter />

      <Divider sx={{ marginBottom: "20px" }} />

      {/* item */}
      {cartItems.map((item, idx) => (
        <>
          <ProductData key={idx} item={item} />
          {idx !== cartItems.length - 1 && (
            <Divider sx={{ margin: "20px 0 10px 0 " }} />
          )}
        </>
      ))}

      {/* footer */}
      <Divider sx={{ margin: "30px 0 5px 0 " }} />
      <CartItemFooter />
    </div>
  );
};

export default CartItems;
