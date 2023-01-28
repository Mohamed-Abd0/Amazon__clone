import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { setShippingData } from "../../Store/checkout_slice/checkoutSlice";

//=====================================================================

const ShippingForm = ({ nextStep }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (!name) {
      return "Your name is required";
    }
    if (!address) {
      return "Your address is required";
    }
    if (!city) {
      return "Your city is required";
    }
    if (!country) {
      return "Your country is required";
    }
    if (!zip) {
      return "Your Zip/Postal code is required";
    }
    return "";
  };

  const SubmitHandler = (e) => {   
    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }
    setFormError();
    dispatch(setShippingData({ name, address, city, country, zip }));
    nextStep();
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <form onSubmit={SubmitHandler}>
        {formError && <Typography color="error">{formError}</Typography>}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            ></TextField>

            <TextField
              id="standard-basic"
              label="Address line 1"
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
            ></TextField>

            <TextField
              id="standard-basic"
              label="City"
              variant="standard"
              onChange={(e) => setCity(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
            ></TextField>
            <TextField
              id="standard-basic"
              label="Shipping Country"
              variant="standard"
              onChange={(e) => setCountry(e.target.value)}
            ></TextField>
            <TextField
              id="standard-basic"
              label="Zip/Postal code"
              variant="standard"
              onChange={(e) => setZip(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <Button variant="outlined" to="/cart">
            Back to Cart
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => SubmitHandler()}
          >
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default ShippingForm;
