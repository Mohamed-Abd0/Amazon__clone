import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import words from "./../../leng.json";

const AddToCartBtn = ({handleAddToCart}) => {

  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];

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
      onClick={handleAddToCart} 
    >
      {activWrods.addToCart}
    </Button>
  );
};

export default AddToCartBtn;
