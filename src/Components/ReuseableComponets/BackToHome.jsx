import React from "react";
import { Stack, Box, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const BackToHome = () => {
  return (
    <Box
      sx={{
        my: 4,
        textAlign: "left",
        a: {
          textDecoration: "none",
          color: "black",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
        },
        "a:hover": { textDecoration: "underline" },
      }}
    >
      <Link to="/" style={{ display: "inline-block" }}>
        <Stack flexDirection="row">
          <Icon sx={{ mt: "-12px", height: "auto" }}>
            <KeyboardArrowLeftIcon />{" "}
          </Icon>
          <span>Back To Home</span>
        </Stack>
      </Link>
    </Box>
  );
};

export default BackToHome;
