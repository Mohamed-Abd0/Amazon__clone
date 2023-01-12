import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Rating, Typography } from "@mui/material";
import { productContent } from "./../../Data/TestData";
const ProductRating = ({ max }) => {
  const { productId } = useParams();

  const {
    productDetails: { stars },
  } = productContent[+productId];

  const [value, setValue] = useState(stars);

  useEffect(() => {
    setValue(stars);
  }, [stars]);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6">rating : </Typography>
      <Rating
        sx={{ label: { color: "background.secondary" } }}
        name="simple-controlled"
        value={value}
        max={max}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default ProductRating;
