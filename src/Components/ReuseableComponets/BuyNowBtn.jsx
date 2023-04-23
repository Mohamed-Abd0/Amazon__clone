import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import words from "./../../leng.json";

const BuyNowBtn = ({onCheckout}) => {


  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];

  return (
    <Button
      sx={{
        bgcolor: "background.secondary",
        ":hover": { backgroundColor: "action.secondaryHover" },
        ":active": { backgroundColor: "background.secondary" },
        borderRadius: "20px",
        color: "black",
        fontSize: "12px",
        textTransfrom: "capitalize",
      }}
      disableRipple={true}
      onClick= {onCheckout}
    >
      {activWrods.buyNow}
    </Button >
  );
};

export default BuyNowBtn;
