import React, { Fragment } from "react";
import {
  ProductImg,
  ProductContent,
  SuggestProducts,
  ProductOptions,
} from "../Components/ProductPageComponents";
import { BackToHome, FloatingIcon } from "../Components/ReuseableComponets";
import SettingsIcon from "@mui/icons-material/Settings";
import { Stack, Box } from "@mui/material";

const Product = () => {
  return (
    <Fragment>
      <Box sx={{ maxWidth: "1400px", m: "auto" }}>
        <Box sx={{ mx: { xs: "1rem", sm: "2rem" } }}>
          <BackToHome />
        </Box>
        <Stack
          flexDirection={{ md: "row" }}
          sx={{ mx: { xs: "1rem", sm: "2rem" } }}
          justifyContent="space-between"
          gap={2}
        > 
          <Stack
            flexDirection={{ lg: "row" }}
            sx={{ maxWidth: { xs: "100%", md: "65%", lg: "75%" } }}
            gap={4}
          >
            <ProductImg />
            <ProductContent />
          </Stack>
          <ProductOptions />
        </Stack>
      </Box>
      <SuggestProducts />
    </Fragment>
  );
};

export default Product;
