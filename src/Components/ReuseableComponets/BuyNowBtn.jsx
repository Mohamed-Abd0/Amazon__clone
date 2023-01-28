import React from "react";
import { Button } from "@mui/material";

const BuyNowBtn = () => {
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
    >
      buy now
    </Button>
  );
};

export default BuyNowBtn;
