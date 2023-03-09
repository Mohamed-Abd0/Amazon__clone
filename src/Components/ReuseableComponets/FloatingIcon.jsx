import React from "react";
import { useDispatch } from "react-redux";

import { Box, IconButton } from "@mui/material";
import { floatingIconFunc } from "../../Store/ModalSlice";

const FloatingIcon = ({ type, action }) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{ position: "fixed", right: "0", zIndex: 9 }}
      onClick={() =>
        dispatch(floatingIconFunc({ overlay: true, action: action }))
      }
    >
      <IconButton
        sx={{
          position: "fixed",
          right: "0",
          display: { xs: "block", md: "none" },
          p: "0px",
          width: "40px",
          height: "40px",
          lineHeight: "20px",
          borderRadius: "5px 0 0 5px",
          bgcolor: "background.main",
          color: "white",
          ":hover": { bgcolor: "background.main" },
          svg: { width: "20px", height: "20px" },
        }}
      >
        {type}
      </IconButton>
    </Box>
  );
};

export default FloatingIcon;
