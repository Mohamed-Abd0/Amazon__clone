import { useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";

import useStyles from "../Components/Payment/styles";
import ShippingForm from "../Components/Payment/ShippingForm";
import PaymentForm from "../Components/Payment/PaymentForm.jsx";
import { Container } from "@mui/material";
import OrderSummary from "../Components/Payment/OrderSummary";
import Confirmation from "../Components/Payment/Confirmation";


const Payment = () => {
  const [activeStep, setActiveStep] = useState(3);
  const classes = useStyles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  return (
    <>
      <Container>
        <div className={classes.container}>
          <div className={classes.checkoutContainer}>
            <List>

              <ListItem
                button
                disabled={activeStep !== 1}
                onClick={() => setActiveStep(1)}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={activeStep === 1 ? classes.activeStep : null}
                >
                  1   Choose a shipping address
                </ListItemText>
              </ListItem>

              {activeStep === 1 && (
                <Box>
                  <ShippingForm nextStep={nextStep} />
                </Box>
              )}
              <Divider variant="middle" />



              <ListItem
                button
                disabled={activeStep !== 2}
                onClick={() => setActiveStep(2)}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={activeStep === 2 ? classes.activeStep : null}
                >
                  2 Payment method
                </ListItemText>
              </ListItem>
              {activeStep === 2 && (
                <Box>
                  <PaymentForm nextStep={nextStep} />
                </Box>
              )}
              <Divider variant="middle" />



              <ListItem
                button
                disabled={activeStep !== 3}
                onClick={() => setActiveStep(3)}
              >
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  className={activeStep === 3 ? classes.activeStep : null}
                >
                  3 Items and shipping
                </ListItemText>
              </ListItem>
              {activeStep === 3 && (
                <Paper variant="outlined" className={classes.paperStyle}>
                  <Confirmation />
                </Paper>
              )}
              <Divider variant="middle" />

            </List>
          </div>

          <div className={classes.orderSummary}>
            <OrderSummary />
          </div>

        </div>
      </Container>
    </>
  );
};

export default Payment;
