import React from "react";
import { styled } from "@mui/material/styles";
const UnderLineSpan = ({ children }) => {
  const StyledSpan = styled("span")({
    margin: 0,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#007185",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  });
  return <StyledSpan>{children}</StyledSpan>;
};

export default UnderLineSpan;
