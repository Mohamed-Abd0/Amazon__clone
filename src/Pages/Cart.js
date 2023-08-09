import React from "react";
import CartContent from "../Components/Cart/CartContent";
import { Paper, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TotalPrice from "../Components/Cart/TotalPrice";
import SavedItems from "../Components/Cart/SavedItems";
import { useSelector } from "react-redux";



const useStyles = makeStyles(() => ({
  container: {
    padding: "15px",
    backgroundColor: "#EAEDED",
    justifyContent: "space-between",
  },
}));

const Cart = () => {
  const classes = useStyles();

  const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12} md={9.5}>
        <Stack spacing={2}>
          <Paper>
            <CartContent />
          </Paper>
          <Paper>
            <SavedItems />
          </Paper>
        </Stack>
      </Grid>
      {cartItems.length > 0 && (
        <Grid item md={2.5} sx={{ display: { xs: "none", md: "block" } }}>
          <Paper>
            <TotalPrice />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default Cart;
