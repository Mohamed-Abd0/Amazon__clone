import { useState } from "react"; 
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

import useStyles from "../Components/Payment/styles";
import ShippingForm from "../Components/Payment/ShippingForm.jsx";
import PaymentForm from "../Components/Payment/PaymentForm.jsx"; 
//===================================================================
const steps = ["Shipping address", "Payment details"];

//===================================================================

const Payment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const classes = useStyles();


    const nextStep = () =>
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () =>
      setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Confirmation = () => {
    return (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your pruchase, firstName lastName
          </Typography>
        </div>
      </>
    );
  };

  const Form = () =>
    activeStep === 0 ? (
      <ShippingForm nextStep={nextStep} />
    ) : (
      <PaymentForm nextStep={nextStep} backStep={backStep} />
    );

  return (
    <>
      <div className="content">
        <List>
          <ListItem button onClick={() => setActiveStep(1)}>
            <ListItemText primary="1  Choose a shipping address" />
          </ListItem>
          {activeStep === 1 && <ShippingForm />}
          <ListItem button onClick={() => setActiveStep(2)}>
            <ListItemText primary="2  Payment method" />
          </ListItem>
          {activeStep === 2 && <PaymentForm />}
          <ListItem button onClick={() => setActiveStep(3)}>
            <ListItemText primary="3  Items and shipping" />
          </ListItem>
          {activeStep === 3 && <Confirmation />}
        </List>
      </div>
      <div className="products"></div>
    </>
  );
};

export default Payment;
