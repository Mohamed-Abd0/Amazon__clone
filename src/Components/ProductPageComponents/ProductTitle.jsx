import React from "react";
import ProductRating from "./ProductRating";

import { Box, Typography, Link } from "@mui/material";
// import useCurrentProduct from "../../Hooks/useCurrentProduct";
import { useSelector } from "react-redux";

const ProductTitle = () => {

  const {product} = useSelector(({ProductSlice}) => ProductSlice)
  const lengActive = useSelector(({leng}) => leng)
  
  console.log(product)
  console.log(lengActive.lang)


  let title = product.minTitle?.en;
  // let brand = product.category[1];
  let rating = product.reting?.mainRating;

  
  // const { title, productStore, rating, answers } =
  //   useCurrentProduct("productDetails");

  return (
    <Box>
      <Typography variant="h6" sx={{ lineHeight: "1.3" }}>
        {title}
      </Typography>
      <Link variant="body2" underline="hover">
        {/* brand: {brand}g */}
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
