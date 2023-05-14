import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

import { setPaymentData } from "../../Store/checkout_slice/checkoutSlice";

//=====================================================================
const PaymentForm = ({ nextStep, backStep }) => {
  const dispatch = useDispatch();
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (!nameOnCard) {
      return "Name on Card is required";
    }
    if (!expiryDate) {
      return "Expiry Date is required";
    }
    if (!cardNumber) {
      return "Card Number is required";
    }
    if (!cvv) {
      return "CVV is required";
    }
    return "";
  };

  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  //   const error = validateForm();
  //   if (error) {
  //     setFormError(error);
  //     return;
  //   }
  //   setFormError();
  //   dispatch(setPaymentData({ nameOnCard, expiryDate, cardNumber, cvv }));
  //   nextStep();
  // };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <form onSubmit={SubmitHandler}>
        {formError && <Typography color="error">{formError}</Typography>}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="name-on-card"
              label="Name on Card"
              variant="standard"
              onChange={(e) => setNameOnCard(e.target.value)}
            />
            <TextField
              id="expiry-date"
              label="Expiry Date"
              variant="standard"
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="card-number"
              label="Card Number"
              variant="standard"
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <TextField
              id="cvv"
              label="CVV"
              variant="standard"
              onChange={(e) => setCvv(e.target.value)}
            />
          </Grid>
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <Button variant="outlined" onClick={() => backStep()}>
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => SubmitHandler()}
          >
            Pay $100
          </Button>
        </div>
      </form>
    </>
  );
};

export default PaymentForm;
