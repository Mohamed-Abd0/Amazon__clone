import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorIcon from "@mui/icons-material/Error";
import useCurrentProduct from "../../Hooks/useCurrentProduct";

const ProductPrice = () => {
  const { price } = useCurrentProduct("productDetails");

  

  return (
    <Box>
      <Box
        variant="body1"
        sx={{
          span: { fontSize: "14px" },
          display: "flex",
          mb: 1,
          mt: 2,
        }}
      >
        <span>$</span>
        <div style={{ fontSize: "28px", fontWeight: "500", marginTop: "-6px" }}>
          {price}
        </div>
        <span>00</span>
      </Box>
      <Typography variant="body2" color="gray">
        $306.63 Shipping & Import Fees Deposit to United Kingdom
        <Link sx={{ ml: 1 }} variant="subtitle2" underline="hover">
          details
          <IconButton sx={{ p: "0", ml: 0.5 }}>
            <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
          </IconButton>
        </Link>
      </Typography>
      <Typography
        variant="body2"
        color="gray"
        sx={{ display: "flex", alignItems: "center", my: 1 }}
      >
        <ErrorIcon sx={{ mr: 1, path: { color: "text.teal" } }} />
        Sales taxes may apply at checkout
      </Typography>
    </Box>
  );
};

export default ProductPrice;
