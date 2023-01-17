import React from "react";
import ProductRating from "./ProductRating";

import { Box, Typography, Link } from "@mui/material";
import useCurrentProduct from "../../Hooks/useCurrentProduct";

const ProductTitle = () => {
  const { title, productStore, rating, answers } =
    useCurrentProduct("productDetails");

  return (
    <Box>
      <Typography variant="h6" sx={{ lineHeight: "1.3" }}>
        {title}
      </Typography>
      <Link variant="body2" underline="hover">
        visit the {productStore} gaming Store
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
          {answers} answered questions
        </Link>
      </Box>
    </Box>
  );
};

export default ProductTitle;
