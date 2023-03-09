import React from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { allModalsState } from "../../Store/ModalSlice";

const CloseFloatingSection = () => {
  const dispatch = useDispatch();
  return (
    <IconButton
      sx={{ svg: { fontSize: "24px" }, p: 0 }}
      onClick={() => dispatch(allModalsState(false))}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseFloatingSection;
