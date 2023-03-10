import React from "react";
import { Button } from "@mui/material";

const AddToCartBtn = () => {
  return (
    <Button
      sx={{
        bgcolor: "background.primary",
        ":hover": { backgroundColor: "action.primaryHover" },
        ":active": { backgroundColor: "background.primary" },
        borderRadius: "20px",
        color: "black",
        fontSize: "12px",
        textTransfrom: "capitalize",
      }}
      disableRipple={true}
    >
      add to cart
    </Button>
  );
};

export default AddToCartBtn;
