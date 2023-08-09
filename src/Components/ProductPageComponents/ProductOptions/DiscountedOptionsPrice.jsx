import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import words from "../../../leng.json";

// Define styles using makeStyles from MUI
const useStyles = makeStyles((theme) => ({
  discountBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  discountPercentage: {
    color: "#CC0C39",
    fontWeight: 300,
  },
  discountedPrice: {
    fontWeight: 600,
    margin: "0 5px !important",
  },
  currency: {
    marginTop: "-10px !important",
  },
  freeReturns: {
    color: theme.palette.text.teal,
    fontWeight: 300,
  },
}));

// Component to render discounted price and list price
const DiscountedPrice = () => {
  const classes = useStyles();

  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  const { price, discountValue , ShippingFree } = product;
  const numberdiscountValue = +discountValue;
  const boleanShippingFree = !!ShippingFree;
  const discountedPrice = `${(price * (1 - numberdiscountValue / 100)).toFixed(0)}`;

  // Access language data from Redux store
  const lengActive = useSelector(({ leng }) => leng);
  const activWords = words[`${lengActive.lang}`];

  // Translated words 
  const EGP = activWords.EGP;
  const freeReturns = activWords.freeReturns;
  const freeDeliveryText = activWords.freeDelivery;


  // If discountValue is available, show discount price and list price


    return (
      <Stack>
        <Box className={classes.discountBox}>
          <Typography variant="h5" className={classes.discountedPrice}>
            {discountedPrice}
          </Typography>
          <Typography variant="subTitle2" className={classes.currency}>
            {EGP}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className={classes.freeReturns}>
            {freeReturns}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className={classes.freeReturns}>
            {boleanShippingFree ? freeDeliveryText : ""}
          </Typography>
        </Box>
      </Stack>
    );

};

export default DiscountedPrice;
