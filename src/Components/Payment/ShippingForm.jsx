import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Divider,
  makeStyles,
  Modal,
  Box,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { setShippingData } from "../../Store/checkout_slice/checkoutSlice";

//=====================================================================
const useStyles = makeStyles({
  footer: {
    backgroundColor: "#F0F2F2",
    padding: "15px",
  },
  submitButton: {
    backgroundColor: "#f7ca00",
    padding: "5px 10px",
    fontSize: "0.7rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e8bd02",
    },
  },
  boxStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400, 
    background: '#fff', 
    borderRadius: "10px",
    boxShadow: 24, 
  },
  textField: {
    width: "100%", 
    marginBottom: '10px'
  }
});
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
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.boxStyle}>
          <Grid container spacing={1} style={{ padding: "10px 20px" }}>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Your addresses
            </Typography>
            <br />
          </Grid>
          <form onSubmit={SubmitHandler} id="modal-modal-title">
            {formError && <Typography color="error">{formError}</Typography>}
            <Grid container spacing={2} style={{ padding: "0 20px" }}>
              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              ></TextField>

              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Address line 1"
                variant="outlined"
                onChange={(e) => setAddress(e.target.value)}
              ></TextField>

              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="City"
                variant="outlined"
                onChange={(e) => setCity(e.target.value)}
              ></TextField>

              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Email"
                variant="outlined"
              ></TextField>
              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Shipping Country"
                variant="outlined"
                onChange={(e) => setCountry(e.target.value)}
              ></TextField>
              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Zip/Postal code"
                variant="outlined"
                onChange={(e) => setZip(e.target.value)}
              ></TextField>
            </Grid>
          </form>
            <Button
              type="submit"
              variant="contained"
              className={classes.submitButton}
              onClick={(e) => SubmitHandler()}
            >
              Use this address
            </Button>
        </Box>
      </Modal>
      <br />
      <Divider />
      <Grid container className={classes.footer}>
        <Button
          type="submit"
          variant="contained"
          className={classes.submitButton}
          onClick={(e) => SubmitHandler()}
        >
          Use this address
        </Button>
      </Grid>
    </>
  );
};

export default ShippingForm;
