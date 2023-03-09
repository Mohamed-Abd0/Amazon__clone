import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Rating, IconButton } from "@mui/material";
import { productContent } from "./../../Data/TestData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
      <Rating
        sx={{ label: { color: "background.secondary" } }}
        name="read-only"
        readOnly
        value={value}
        max={max}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="small"
      />
      <IconButton sx={{ p: "0", ml: 0.5 }}>
        <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
      </IconButton>
    </Box>
  );
};

export default ProductRating;
