import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import words from "../../../leng.json"
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles(() => ({
  button: {
    fontWeight: "bold !important",
    backgroundColor: "#FFD814 !important",
    color: "#111 !important",
    borderRadius: "4px",
    padding: "5px !important",
  },
}));







const CheckoutBtn = () => {
  const classes = useStyles();

  const navigate = useNavigate()

  const lengActive = useSelector(({leng})=> leng);
  const activeWords = words[`${lengActive.lang}`]

  // translated words 
  const processToCheckout = activeWords.processToCheckout


  const paymentHandler = (e) => {
    e.preventDefault();
    navigate("/payment")
  }


  return (
    <>
      <Button onClick={paymentHandler} className={classes.button}>{processToCheckout}</Button>
    </>
  );
};

export default CheckoutBtn;
