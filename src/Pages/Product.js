import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  ProductImg,
  ProductContent,
  SuggestProducts,
} from "../Components/ProductPageComponents";
import BackToHome from "../Components/ReuseableComponets/BackToHome";

import { Stack, Box } from "@mui/material";
import { getProductFromParam } from "../Store/product_slice/ProductSlice";
import { productContent } from "../Data/TestData";

const Product = () => {
  const { productId } = useParams();

  const action = useDispatch();

  const product = productContent[+productId];

  //for test
  //dispatch action from home page to product page when determind product 
  //this action contains product object that contains all details
  useEffect(() => {
    action(getProductFromParam(product));
  }, [action, product]);

  return (
    <Fragment>
      <BackToHome />
      <Box sx={{ width: { lg: "80%" }, m: "auto" }}>
        <Stack
          flexDirection={{ md: "row" }}
          justifyContent="space-evenly"
          gap={3}
        >
          <ProductImg />
          <ProductContent />
        </Stack>
      </Box>
      <SuggestProducts />
    </Fragment>
  );
};

export default Product;
