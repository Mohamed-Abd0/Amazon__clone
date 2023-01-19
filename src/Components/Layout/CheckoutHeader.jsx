import { Grid } from "@material-ui/core";
import React from "react";
import Amazon_logo from "../../assets/Amazon_logo.svg.png";
import useStyles from "./CheckoutHeaderStyle";
const CheckoutHeader = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.main} lg={12}>
      <Grid
        className={classes.root}
        container
        style={{ margin: "0 10px" }}
        lg={10}
      >
        <Grid container spacing={2}>
          <Grid className={classes.imgContainer} item sm={3}>
            <img src={Amazon_logo} alt="amazon-logo" className={classes.logo} />
          </Grid>
          <Grid className={classes.textcontainer} item sm={7}>
            <h2 className={classes.headerText}>
              Checkout (<span className={classes.span}>1 item</span>)
            </h2>
          </Grid>
        </Grid>
      </Grid>
    </Grid> 
  );
};

export default CheckoutHeader;
