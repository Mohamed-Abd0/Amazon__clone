import React from "react";
import Amazon_logo from "../../assets/Amazon_logo.svg.png";
import useStyles from "./CheckoutHeaderStyle";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
const CheckoutHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.main}>
        <Container>
          <div className={classes.imgContainer}>
            <Link to="/">
              <img
                src={Amazon_logo}
                alt="amazon-logo"
                className={classes.logo}
              />
            </Link>
          </div>
          <div className={classes.textcontainer}>
            <h2 className={classes.headerText}>
              Checkout (<span className={classes.span}>1 item</span>)
            </h2>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CheckoutHeader;
