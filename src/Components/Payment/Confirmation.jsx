import React from "react";
import { useSelector } from "react-redux";
import ProductData from "../Cart/cartItemComponents/ProductData";
import { Divider, Stack, Box } from "@mui/material";
import SendOrder from "./ConfirmationConmponents/SendOrder";
import useStyles from "./styles";

const Confirmation = () => {

  const classes = useStyles();

  const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);
  const selectedItems = cartItems.filter((item) => item.selected === true);

  return (
    <Box className={classes.card} style={{ marginLeft: "50px" }}>
      
    </Box>
  );
};

export default Confirmation;
