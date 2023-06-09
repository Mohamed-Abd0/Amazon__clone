import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Typography, Divider, Box } from "@material-ui/core";
// import { setShippingData } from "../../Store/checkout_slice/checkoutSlice";

import ShippingModal from "./shippingform/ShippingModal";
import addAddress from "../../assets/payment/addAddress.png";
import lockerOrange from "../../assets/payment/locker_orange.png";
import useStyles from "./styles"; 
import YellowBtn from "./shippingform/YellowBtn";
import TextSpan from "../ReuseableComponets/TextSpan";
//=====================================================================

const ShippingForm = ({ nextStep,currentStep, prevStep }) => {
  const classes = useStyles();


  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

  const validateForm = () => {
    
  };

  const SubmitHandler = (e) => {
    const error = validateForm();
    console.log('SubmitHandler')
    if (error) {
      // setFormError(error);
      return;
    }
    // setFormError();
    // dispatch(setShippingData({ name, address, city, country, zip }));
    nextStep();
  };

  return (
    <Box className={classes.card} style={{ marginLeft: "50px" }}>
      <div className={classes.cardContainer}>

        {/* ********************************* */}

        <Box style={{ width: "100%", textAlign: "left" }}>
          <Box style={{ width: "100%", textAlign: "left" }}>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Your addresses
            </Typography>
          </Box>

          <Divider style={{ width: "100%" }} />

          <Box
            onClick={openHandler}
            style={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
              cursor: "pointer",
              padding: "5px 0",
              margin: "7px",
            }}
          >
            <img
              src={addAddress}
              alt=""
              style={{
                width: "13px",
                height: "13px",
                margin: "4px 5px ",
              }}
            />
            <TextSpan>Add your address</TextSpan>
          </Box>
        </Box>
        {/* ********************************* */}

        <ShippingModal open={open} onClose={closeHandler} SubmitHandler={SubmitHandler}/>

        {/* ********************************* */}

        <Box style={{ margin: "10px 0", width: "100%", textAlign: "left" }}>
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              src={lockerOrange}
              alt=""
              style={{ width: "17px", height: "20px", marginRight: "3px" }}
            />
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Your pickup locations
            </Typography>
          </Box>

          <Divider style={{ width: "100%" }} />

          <Box
            style={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
              cursor: "pointer",
              padding: "5px 0",
              margin: "7px",
            }}
          >
            <img
              src={addAddress}
              alt=""
              style={{
                width: "13px",
                height: "13px",
                margin: "4px 5px ",
              }}
            />
            <TextSpan>Find a pick-up location near you</TextSpan>
          </Box>
        </Box>
      </div>
      <div className={classes.cardFooter}>
        <YellowBtn OnAction={SubmitHandler} >Use this address</YellowBtn>
      </div>
    </Box>
  );
};

export default ShippingForm;
