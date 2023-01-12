 import React from "react";
import { Box } from "@mui/material";
import { productContent } from "../../Data/TestData";
import SwiperContainer from "../ReuseableComponets/SwiperContainer";
import { suggestProductsBP } from "../../Constants/Constants";

const SuggestProducts = () => {
  return (
    <Box sx={{ mt: 16 }}>
      <SwiperContainer
        products={productContent}
        breakPoints={suggestProductsBP}
      />
    </Box>
  );
};

export default SuggestProducts;
