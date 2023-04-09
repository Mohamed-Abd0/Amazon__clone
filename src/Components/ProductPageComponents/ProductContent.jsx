import React from "react";
import { Stack } from "@mui/material";

import ProductTable from "./ProductTable";
import ProductAbout from "./ProductAbout";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";

const ProductContent = () => {
  return (
    <Stack
      sx={{
        width: { lg: "65%" },
        textTransform: "capitalize",
        h6: {
          fontSize: { xs: "1rem", md: "1.2rem" },
        },
        a: {
          color: "text.teal",
        },
        "a:hover": {
          color: "text.darkOriange",
        },
        "> div": {
          borderBottom: "1px solid ",
          borderBottomColor: "border.lightgray",
          pb: 2,
        },
      }}
    >
      <ProductTitle />
      <ProductPrice />
      <ProductTable />
      <ProductAbout />
    </Stack>
  );
};

export default ProductContent;
