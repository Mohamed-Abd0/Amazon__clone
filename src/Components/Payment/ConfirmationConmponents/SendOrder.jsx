import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector , useDispatch } from "react-redux";
import words from "../../../leng.json"
import { useNavigate } from "react-router-dom";
import { sendOrder } from "../../../Firebase-APIS/FirebaseFunctions";
import { clearCart } from "../../../Store/CartSlice";




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

  const dispatch = useDispatch();


  const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);

  const lengActive = useSelector(({leng})=> leng);
  const activeWords = words[`${lengActive.lang}`]

  // translated words 
  const processToCheckout = activeWords.processToCheckout


  const SendOrder = (e) => {
    e.preventDefault();

    const uid = localStorage.getItem('uid');

    // const CartItems = JSON.parse(localStorage.getItem('cartItems')) 
    const orderedItems = cartItems.filter(item => item.selected === true )
    const order = {...orderedItems}


    sendOrder(uid , order)

    dispatch(clearCart())
    

    navigate("/")
  }


  return (
    <>
      <Button onClick={SendOrder} className={classes.button}>{processToCheckout}</Button>
    </>
  );
};

export default CheckoutBtn;
