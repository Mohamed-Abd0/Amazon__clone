import React from "react";
import { Grid, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import words from "../../../leng.json";
import { useSelector } from "react-redux";
import payImg from "../../../assets/productPageIcons/pay.png";
import returnImg from "../../../assets/productPageIcons/return.png";
import deleveryImg from "../../../assets/productPageIcons/delevery.png";
import warrantyImg from "../../../assets/productPageIcons/warranty.png";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  img: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },
  link: {
    textDecoration: "none !important",
  },
}));

const SellingOptions = () => {
  const classes = useStyles();

  const lengActive = useSelector(({ leng }) => leng);
  const activWords = words[`${lengActive.lang}`];

  const cashOnDelivery = activWords.cashOnDelivery;
  const returnable = activWords.returnable;
  const deliveredByAmazon = activWords.deliveredByAmazon;
  const manufacturerWarranty = activWords.manufacturerWarranty;

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Box className={classes.container}>
          <img src={payImg} alt="Cash on Delivery" className={classes.img} />
          <Link href="#" variant="subtitle2" className={classes.link}>
            {cashOnDelivery}
          </Link>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.container}>
          <img
            src={returnImg}
            alt="15 days Returnable"
            className={classes.img}
          />
          <Link href="#" variant="subtitle2" className={classes.link}>
            {returnable}
          </Link>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.container}>
          <img
            src={deleveryImg}
            alt="Delivered by Amazon"
            className={classes.img}
          />
          <Link href="#" variant="subtitle2" className={classes.link}>
            {deliveredByAmazon}
          </Link>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.container}>
          <img
            src={warrantyImg}
            alt="10 Year Manufacturer Warranty"
            className={classes.img}
          />
          <Link href="#" variant="subtitle2" className={classes.link}>
            {manufacturerWarranty}
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SellingOptions;
