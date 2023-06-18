import React from "react";
import { useSelector } from "react-redux";
import ProductData from "../Cart/cartItemComponents/ProductData";
import { Divider, Stack, Box } from "@mui/material";
import SendOrder from "./ConfirmationConmponents/SendOrder";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import ConfirmationData from "./ConfirmationConmponents/ConfirmationData";

const Confirmation = () => {
  const classes = useStyles();

  const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);
  console.log(cartItems);
  const selectedItems = cartItems.filter((item) => item.selected === true);

  // ______________ Products Data _________________

  return (
    <>
      <Box className={classes.card} style={{ marginLeft: "50px" }}>
        <div className={classes.cardContainer}>
          <Typography
            style={{
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: "700",
              color: "#c45500",
              overflowWrap: "break-word",
            }}
          >
            Estimated delivery: 15 June 2023
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              color: "#565959",
            }}
          >
            Items shipped from amazon.eg
          </Typography>
          <Box className={classes.FlexBoxy}>
            {cartItems.map((item, idx) => (
              <Box key={idx}>
                <ConfirmationData item={item} classes={classes} />
                {idx !== cartItems.length - 1 && (
                  <Divider
                    sx={{
                      margin: "20px 0 10px 0 ",
                      backgroundColor: "#BBBFBF",
                      height: "0.5px",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </div>
      </Box>
      <Box style={{ padding: "10px" }}></Box>
      <Box className={classes.card} style={{ marginLeft: "50px" }}>
        <div className={classes.cardContainer}></div>
      </Box>
    </>
  );
};

export default Confirmation;
