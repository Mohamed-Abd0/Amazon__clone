import { useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText, 
} from "@material-ui/core";

import useStyles from "../Components/Payment/styles";
import ShippingForm from "../Components/Payment/ShippingForm";
import PaymentForm from "../Components/Payment/PaymentForm.jsx";
import { Container } from "@mui/material";
import OrderSummary from "../Components/Payment/OrderSummary";
import Confirmation from "../Components/Payment/Confirmation";


const Payment = () => {
  const classes = useStyles();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStepHandler = () => {
    if (currentStep < totalSteps){
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStepHandler = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => setCurrentStep((prevActiveStep) => prevActiveStep + 1);

  return (
    <>
      <Container>
        <div className={classes.container}>
          <div className={classes.checkoutContainer}>
            <List>

              <ListItem
                button
                disabled={currentStep !== 1}
                onClick={() => setCurrentStep(1)}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={currentStep === 1 ? classes.activeStep : null}
                > 
                  1   Choose a shipping address
                </ListItemText>
              </ListItem>

              {currentStep === 1 && (
                <Box>
                  <ShippingForm nextStep={nextStep} />
                </Box>
              )}
              <Divider variant="middle" />



              <ListItem
                button
                disabled={currentStep !== 2}
                onClick={() => setCurrentStep(2)}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={currentStep === 2 ? classes.activeStep : null}
                >
                  2 Payment method
                </ListItemText>
              </ListItem>
              {currentStep === 2 && (
                <Box>
                  <PaymentForm nextStep={nextStep} />
                </Box>
              )}
              <Divider variant="middle" />



              <ListItem
                button
                disabled={currentStep !== 3}
                onClick={() => setCurrentStep(3)}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={currentStep === 3 ? classes.activeStep : null}
                >
                  3 Items and shipping
                </ListItemText>
              </ListItem>
              {currentStep === 3 && ( 
                  <Confirmation /> 
              )} 

            </List>
          </div>

          <div className={classes.orderSummary}>
            <OrderSummary activeStep={currentStep} />
          </div>

        </div>
      </Container>
    </>
  );
};


export default Payment;