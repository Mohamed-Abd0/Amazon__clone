import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import words from '../../leng.json';

// Define styles using makeStyles from MUI
const useStyles = makeStyles((theme) => ({
  discountBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px"
  },
  discountPercentage: {
    color: "#CC0C39",
    fontWeight: 300,
  },
  discountedPrice: {
    fontWeight: 600,
    margin: "0 5px !important"
  },
  currency: {
    marginTop:"-10px !important",
  },
  listPriceBox: {
    display: "flex",
    margin: "5PX 0 10px 0",
    color: "#565959",
  },
  listPriceValue: {
    textDecoration: "line-through",
    padding:" 0 5px"
  }
}));

// Component to render discounted price and list price
const DiscountedPrice = () => {

  const classes = useStyles();

  const {product} = useSelector(({ProductSlice}) => ProductSlice);
  const  {price , discountValue}= product


  // Access language data from Redux store
  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];

  // Translated words for list price and currency
  const listPrice = activWrods.listPrice
  const EGP = activWrods.EGP
  
  // If discountValue is available, show discount price and list price
  if (discountValue) {
    const discountedPrice = `${(price * (1 - discountValue / 100)).toFixed(0)}`;
    const discountPercentage = `${discountValue}%`;

    return (
      <Stack >
        <Box className={classes.discountBox}>
          <Typography variant="h5" className={classes.discountPercentage}>{`- ${discountPercentage}`}</Typography>
          <Typography variant="h5" className={classes.discountedPrice}>{discountedPrice}</Typography>
          <Typography variant="subTitle2" className={classes.currency}>{EGP}</Typography>
        </Box>
        <Box className={classes.listPriceBox}>
          <Typography variant="body2" >{listPrice}:</Typography>
          <Typography variant="body2" className={classes.listPriceValue}>{price}</Typography>
        </Box>
      </Stack>
    );
  } 
  // If discount is not available, only show the old price
  else {
    return (
      <Box className={classes.discountBox}>
        <Typography variant="h5" className={classes.discountedPrice}>{price}</Typography>
        <Typography variant="subTitle2" className={classes.currency}>{EGP}</Typography>
      </Box>
    );
  }
};

export default DiscountedPrice;
