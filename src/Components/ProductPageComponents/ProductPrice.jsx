import React from "react";
import { Stack } from "@mui/material";
import DiscountedPrice from "./DiscountedPrice";
import SellingInformation from "./SellingInformation";
import SellingOptions from "./SellingOptions";



const ProductPrice = () => {


  return (
    <Stack>
      <DiscountedPrice />
      <SellingInformation /> 
      <SellingOptions />
    </Stack>
  );
};

export default ProductPrice;
