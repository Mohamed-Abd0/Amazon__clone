import React from "react";
import Grid from '@material-ui/core/Grid';
import CheckoutBtn  from '../reusableComonents/CheckoutBtn';
import SubTotal from "../reusableComonents/SubTotal";



const CartItemFooter = () => {

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
      <Grid item sx={{ display: {  md: "none" } }}>
        <CheckoutBtn/>
      </Grid>
      <Grid item>
        <SubTotal/>
      </Grid>
    </Grid>
  );
};

export default CartItemFooter;
