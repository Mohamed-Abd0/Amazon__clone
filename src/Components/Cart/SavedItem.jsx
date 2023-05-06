import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch , useSelector} from "react-redux";
import { addToCart , deleteFromSavedItems } from "../../Store/CartSlice";
import words from "../../leng.json";





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


  // Access language data from Redux store
  const lengActive = useSelector(({ leng }) => leng);
  const activWords = words[`${lengActive.lang}`];

  // translated words 
  const EGP = activWords.EGP
  const InStock = activWords.inStock
  const moveToCart = activWords.moveToCart

  // data of product
  const title = item.minTitle[`${lengActive.lang}`].join(' ');
  const Price = item.price

  return (
    <Grid item xs={12} md={6} lg={3} className={classes.itemContainer} >
      <Box>
        <img
          className={classes.image}
          src={item.mainImg}
          alt=""
        />
      </Box>
      <Typography variant="h6" className={classes.itemTitle}>
        {title}
      </Typography>
      <Typography variant="h5" className={classes.price}>
         {` ${Price} ${EGP} `}
      </Typography>
      <Typography variant="body1" className={classes.status}>
        {InStock}
      </Typography>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={moveToCartHandler}
      >
        {moveToCart}
      </Button>
    </Grid>
  );
}

export default SavedItem;
