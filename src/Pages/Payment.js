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
import ChangeBtn from "../Components/Payment/ChangeBtn";

const Payment = () => {
  const classes = useStyles();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStepHandler = () => {
    console.log("Next step");
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStepHandler = () => {
    console.log("Previous step");
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Container>
        <div className={classes.container}>
          <div className={classes.checkoutContainer}>
            <List>
              <ListItem
                button
                disabled={currentStep < 1}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={currentStep === 1 ? classes.activeStep : null}
                > 
                  <Box style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Box>1  Choose a shipping address</Box>
                    <Box>
                    {currentStep > 1 && (
                      <ChangeBtn onAction={prevStepHandler}>
                        Change
                      </ChangeBtn>
                    )}
                    </Box>
                  </Box>
                  
                </ListItemText>
              </ListItem>

              {currentStep === 1 && (
                <Box>
                  <ShippingForm
                    nextStep={nextStepHandler}
                    currentStep={currentStep}
                    prevStep={prevStepHandler}
                  />
                </Box>
              )}
              <Divider variant="middle" />

              <ListItem
                button
                disabled={currentStep < 2}
                onClick={() => nextStepHandler()}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={currentStep === 2 ? classes.activeStep : null}
                >
                <Box style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Box>2 Payment method</Box>
                <Box>
                {currentStep > 1 && (
                  <ChangeBtn onAction={prevStepHandler}>
                    Change
                  </ChangeBtn>
                )}
                </Box>
              </Box>
                </ListItemText>
              </ListItem>
              {currentStep === 2 && (
                <Box>
                  <PaymentForm nextStep={nextStepHandler} />
                </Box>
              )}
              <Divider variant="middle" />

              <ListItem
                button
                disabled={currentStep < 3}
                onClick={() => nextStepHandler()}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={currentStep === 3 ? classes.activeStep : null}
                >
                <Box style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Box>3 Items and shipping</Box>
                <Box>
                {currentStep > 1 && (
                  <ChangeBtn onAction={prevStepHandler}>
                    Change
                  </ChangeBtn>
                )}
                </Box>
              </Box>
                </ListItemText>
              </ListItem>
              {currentStep === 3 && <Confirmation />}
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
