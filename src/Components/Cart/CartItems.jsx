import React from "react";
import { useSelector } from "react-redux";
import CartItemHeadter from "./cartItemComponents/CartItemHeadter";
import ProductData from "./cartItemComponents/ProductData";
import CartItemFooter from "./cartItemComponents/CartItemFooter";
import { Divider } from "@mui/material";

const CartItems = () => {
  const cartItems = useSelector((state) => state.CartSlice.items);
  console.log("cartItems");

  const mainImg = cartItems.map((item) => item.mainImg);

  const minTitle = cartItems.map((item) => item.minTitle.en);
  const title = minTitle.join("");

  const price = cartItems.map((item) => item.price); 

  return (
    <div className="m-4 p-4">

      {/* header before items */}
      <CartItemHeadter/>

      <Divider sx={{marginBottom: '20px'}}/>
      {/* item */}
      <ProductData mainImg={mainImg} title={title} price={price}/>
 
      
      {/* footer */}
      <Divider sx={{margin: '30px 0 5px 0 '}}/>
      <CartItemFooter/>
    </div>
  );
};

export default CartItems;
