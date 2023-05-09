import React from "react";
import {  Stack } from "@mui/material";
import CheckoutBtn from "./reusableComonents/CheckoutBtn";
import SubTotal from "./reusableComonents/SubTotal";



const TotalPrice = () => {
  return (
    <Stack
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      py={2}
      px={1}
    >
      <SubTotal />
      <CheckoutBtn />
    </Stack>
  );
};

export default TotalPrice;
