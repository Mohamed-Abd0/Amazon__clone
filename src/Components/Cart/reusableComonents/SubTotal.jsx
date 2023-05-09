import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import words from "../../../leng.json";

const SubTotal = () => {

  // get cart items data
  const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);
  const totalPrice = useSelector(({ CartSlice }) => CartSlice.totalPrice);


  const lengActive = useSelector(({ leng }) => leng);
  const activeWords = words[`${lengActive.lang}`];

  // translated words
  const subTotal = activeWords.subTotal;
  const items = activeWords.items;
  const EGP = activeWords.EGP;

  return (
    <Typography
      sx={{ fontWeight: "bold" }}
    >{`${subTotal} (${cartItems.length} ${items}):   ${totalPrice} ${EGP}`}</Typography>
  );
};

export default SubTotal;
