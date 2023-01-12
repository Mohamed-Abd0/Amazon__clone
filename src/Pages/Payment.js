import { useState } from "react";
// import { Provider } from "react-redux";
import { Paper, Step, Stepper, StepLabel, Typography } from "@material-ui/core";


import useStyles from "../Components/Payment/styles";
import ShippingForm from "../Components/Payment/ShippingForm.jsx";
import PaymentForm from "../Components/Payment/PaymentForm.jsx";
// import { Provider } from "react-redux";
// import  store  from "../../../store/Store";
//===================================================================
const steps = ["Shipping address", "Payment details"];

//===================================================================

const Payment = () => {
  const [activeStep, setActiveStep] = useState(0);
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
      {/* <Provider store={store}> */}
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form />}
          </Paper>
        </main>
      {/* </Provider> */}
    </>
  );
};

export default Payment;
