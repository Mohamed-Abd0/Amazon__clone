import React from "react";
import CartContent from "../Components/Cart/CartContent";
import { Box, Paper } from "@mui/material";
import SelectedItems from "../Components/Cart/SelectedItems";
import SavedItems from "../Components/Cart/SavedItems";

const Cart = () => {
  return (
    <Box
      sx={{
        padding: "15px",
        backgroundColor: "#EAEDED",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
          width: "calc(80% - 7.5px)",
        }}
      >
        <Paper>
          <CartContent />
        </Paper>
        <Box sx={{ my: 1 }} />
        <Paper>
          <SavedItems />
        </Paper>
      </Box>

      <Box sx={{ width: "20px" }} />

      <Paper sx={{ width: "calc(20% - 7.5px)" }}>
        <SelectedItems />
      </Paper>
    </Box>
  );
};

export default Cart;
