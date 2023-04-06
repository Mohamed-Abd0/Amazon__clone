import React from "react";
import ProductRating from "./ProductRating";

import { Box, Typography, Link } from "@mui/material";
import { useSelector } from "react-redux";



const ProductTitle = () => {

  const {product} = useSelector(({ProductSlice}) => ProductSlice)
  const lengActive = useSelector(({leng}) => leng)
  
  console.log(product)
  console.log(lengActive.lang)

  // extract the wanted data from product object 
  const title = product.minTitle[`${lengActive.lang}`];
  const brand = product.category[1];
  const rating = product.reting.mainRating;

  

  return (
    <Box>
      <Typography variant="h6" sx={{ lineHeight: "1.3" }}>
        {title}
      </Typography>
      <Link variant="body2" underline="hover">
        brand: {brand}
      </Link>
      <Box
        sx={{
          display: "flex",
          columnGap: 2,
          rowGap: 0.5,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <ProductRating max={5} />
        <Link variant="subtitle2" underline="hover">
          {rating} rating
        </Link>
        <span style={{ marginTop: "-5px" }}>|</span>
        <Link variant="subtitle2" underline="hover">
          {0} answered questions
        </Link>
      </Box>
    </Box>
  );
};

export default ProductTitle;
