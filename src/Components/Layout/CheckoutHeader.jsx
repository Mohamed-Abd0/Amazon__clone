import React from "react";
import Amazon_logo from "../../assets/Amazon_logo.svg.png";
 import useStyles from './CheckoutHeaderStyle'
const CheckoutHeader = () => {

  const classes = useStyles();


  return (
    <div className={classes.main}>
      <div className={classes.imgContainer}>
        <img src={Amazon_logo} alt="amazon-logo" className={classes.logo} />
      </div>
      <div className={classes.textcontainer}>
        <h2 className={classes.headerText}>
          Checkout (
          <span className={classes.span}>1 item</span>)
        </h2>
      </div>
    </div>
  );
};

export default CheckoutHeader;
