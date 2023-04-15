import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { productContent } from "../../Data/TestData";
import SwiperContainer from "../ReuseableComponets/SwiperContainer";
import { suggestProductsBP } from "../../Constants/Constants";

const SuggestProducts = () => {
  console.log("SuggestProducts is running");
  const navigate = useNavigate();

  const productsRendering = () =>
    productContent.map((product) => (
      <Box
        key={product.id}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
      >
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia
            src={product?.productImgs[0].src}
            component="img"
            sx={{
              minWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <CardContent>
            <Typography variant="body2">
              {product?.productDetails.title}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ));

  return (
    <Box sx={{ mt: { xs: 8, lg: 16 }, mb: 3, width: "65%", mx: "auto" }}>
      <SwiperContainer breakPoints={suggestProductsBP}>
        {productsRendering()}
      </SwiperContainer>
    </Box>
  );
};

export default SuggestProducts;
