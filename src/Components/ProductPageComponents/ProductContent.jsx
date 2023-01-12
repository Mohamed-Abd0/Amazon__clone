import React from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { productContent } from "./../../Data/TestData";
import ProductRating from "./ProductRating";
import ProductQuantaty from "./ProductQuantaty";
import ProductOptions from "./ProductOptions";

const ProductContent = () => {
  const { productId } = useParams();

  const { productDetails } = productContent[+productId];

  return (
    <Stack
      sx={{
        width: { md: "50%" },
        textAlign: "left",
        textTransform: "capitalize",
        h6: {
          fontSize: { xs: "1rem", md: "1.2rem" },
        },
      }}
      gap={3}
    >
      <Typography variant="h6" sx={{ maxWidth: { md: "450px" } }}>
        {productDetails.title}
      </Typography>

      <Box sx={{ span: { fontSize: "14px" }, display: "flex" }}>
        <Typography variant="h6"> price : </Typography>
        <span style={{ marginLeft: "10px" }}> $</span>
        <Typography variant="h5" sx={{ mt: "-3px" }}>
          {productDetails.price}
        </Typography>
        <span>00</span>
      </Box>
      <ProductRating max={5} />
      <ProductQuantaty />
      <ProductOptions />
    </Stack>
  );
};

export default ProductContent;
