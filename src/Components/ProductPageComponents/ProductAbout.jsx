import React from "react";
import { Box, Typography } from "@mui/material";
import useCurrentProduct from "../../Hooks/useCurrentProduct";

const ProductAbout = () => {
  const arr = useCurrentProduct("aboutItem");

  const renderingList = () => (
    <ul style={{ listStyle: "disc" }}>
      {arr.map((li, idx) => (
        <li key={idx}>
          <Typography
            variant="body2"
            color="text.gray"
            sx={{ fontSize: "12px" }}
          >
            {li}
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <Box sx={{ pt: 1 }}>
      <Typography variant="body2" sx={{ fontWeight: "600" }}>
        about this item
      </Typography>
      <Box sx={{ pl: "20px" }}>{renderingList()}</Box>
    </Box>
  );
};

export default ProductAbout;
