import React from "react";
import { Button } from "@mui/material";

const AddToListBtn = () => {
  return (
    <Button
      disableRipple={true}
      variant="text"
      fullWidth={true}
      sx={{
        border: "none",
        color: "text.black",
        borderColor: "border.darkgray",
        // eslint-disable-next-line
        border: "1px solid",
        fontSize: "12px",
        borderRadius: "5px",
        "&:hover": { borderColor: "primary.main" },
        "&:active": { borderColor: "border.darkgray" },
        mb: { xs: "12px", md: "0px" },
      }}
    >
      Add to list
    </Button>
  );
};

export default AddToListBtn;
