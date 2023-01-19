import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Typography, Divider } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { setShippingData } from "../../../Store/checkout_slice/checkoutSlice";

import ShippingModal from "./ShippingModal";

import useStyles from "../styles";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
//=====================================================================

const ShippingForm = ({ nextStep }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [formError, setFormError] = useState("");

  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

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
      <Grid container spacing={1} style={{ padding: "10px 20px" }}>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Your addresses
        </Typography>
        <br />
      </Grid>
      <Divider />
      <AddIcon />
      <Button onClick={openHandler}>Add your address</Button>
      <ShippingModal open={open} onClose={closeHandler}>
        <FormFields
          SubmitHandler={SubmitHandler}
          name={name}
          setName={setName}
          address={address}
          setAddress={setAddress}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
          zip={zip}
          setZip={setZip}
          formError={formError}
          setFormError={setFormError}
          classes={classes} 
        /> 
        <Grid container className={classes.footer}>
          <SubmitButton SubmitHandler={SubmitHandler} />
        </Grid>
      </ShippingModal>

      <br />
      <Divider />
      <Grid container className={classes.footer}>
        <SubmitButton SubmitHandler={SubmitHandler} />
      </Grid>
    </>
  );
};

export default ShippingForm;
