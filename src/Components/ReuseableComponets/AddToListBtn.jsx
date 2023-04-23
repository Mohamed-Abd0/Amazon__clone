import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import words from "./../../leng.json"

const AddToListBtn = ({onAddToList}) => {


  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];


  const addToList= activWrods.addToList;


  return (
    <Button
      disableRipple={true}
      variant="text"
      fullWidth={true}
      sx={{
        border: "none",
        color: "text.black",
        borderColor: "border.darkgray",
        border: "1px solid",
        fontSize: "12px",
        borderRadius: "5px",
        "&:hover": { borderColor: "primary.main" },
        "&:active": { borderColor: "border.darkgray" },
        mb: { xs: "12px", md: "0px" },
      }}
      onClick={onAddToList}
    >
      {addToList}
    </Button>
  );
};

export default AddToListBtn;
