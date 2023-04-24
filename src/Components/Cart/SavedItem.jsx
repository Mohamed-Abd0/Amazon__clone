import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { addToCart , deleteFromSavedItems } from "../../Store/CartSlice";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(0.5),
    // margin: "16px",
    padding: "16px",
  },
  image: {
    width: "220px",
    height: "220px",
    objectFit: "contain",
    marginBottom: theme.spacing(2),
  },
  itemTitle: {
    fontWeight: 700,
    fontSize: "1rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  price: {
    fontWeight: 700,
    fontSize: "1.125rem",
    marginBottom: theme.spacing(1),
  },
  status: {
    fontWeight: 400,
    fontSize: "0.875rem",
    marginBottom: theme.spacing(1),
  },
  button: {
    borderRadius: theme.spacing(1),
    textTransform: "none",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));






function SavedItem({item}) {
  const dispatch = useDispatch();

  const moveToCartHandler = () => {
    dispatch(addToCart(item));
    dispatch(deleteFromSavedItems(item));
  };

  const classes = useStyles();
  return (
    <Grid item xs={12} md={6} lg={3} className={classes.itemContainer} >
      <Box>
        <img
          className={classes.image}
          src="https://m.media-amazon.com/images/G/42/cart/empty/kettle-desaturated._CB659190457_.svg"
          alt=""
        />
      </Box>
      <Typography variant="h6" className={classes.itemTitle}>
        Razer Viper V2 Pro HyperSpeed Wireless Gaming Mouse: 58g
        Ultra-Lightweight - Optical Switches Gen-3 - 30K Optical Sensor -
        On-Mouse DPI Controls - 80hr Battery - USB Type C Cable Included - Black
      </Typography>
      <Typography variant="h5" className={classes.price}>
        EGP 42.00
      </Typography>
      <Typography variant="body1" className={classes.status}>
        In stock
      </Typography>
      <Typography variant="body2" className={classes.status}>
        Eligible for FREE delivery
      </Typography>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={moveToCartHandler}
      >
        Move to cart
      </Button>
    </Grid>
  );
}

export default SavedItem;
