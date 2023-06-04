import YellowBtn from "./shippingform/YellowBtn";
import useStyles from "./styles";
import { Box, Divider, Typography } from "@material-ui/core";

const OrderSummary = ({activeStep}) => {
  const classes = useStyles();

  const yellowBtnContent = () => {
    if(activeStep === 1){
      return 'Use this Address';
    } else if(activeStep === 2){
      return 'Use this payment method';
    } else if(activeStep === 3){
      return 'Place your order';
    }
  }


  return (
    <Box className={classes.card}>
      <div className={classes.cardContainer}>
        {/********************/}
        <YellowBtn className={classes.cardBtn}>{yellowBtnContent()}</YellowBtn>
        {/********************/}  
        <div style={{ padding: "0.5rem" }}>
          <Typography className={classes.cardTextCenter}>
            Choose a shipping address to continue <br />
            checking out. You'll still have a chance to <br />
            review and edit your order before it's final.
          </Typography>
        </div>

        <Divider style={{ width: "100%" }} />
        <div style={{ width: "100%", padding: "5px 0 " }}>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold", textAlign: "left" }}
          >
            Order Summary
          </Typography>
        </div>
        <Box className={classes.cardDetails}>
          <Box>
            <Typography className={classes.cardTextLeft}>Items:</Typography>
            <Typography className={classes.cardTextLeft}>
              Shipping & handling:
            </Typography>
            <Typography className={classes.cardTextLeft}>
              Cash on Delivery Fee:
            </Typography>
            <Typography className={classes.cardTextLeft}>Total:</Typography>
            <Typography className={classes.cardTextLeft}>
              Promotion applied:
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.cardTextRight}>
              EGP 350.00
            </Typography>
            <Typography className={classes.cardTextRight}>EGP 26.00</Typography>
            <Typography className={classes.cardTextRight}>EGP 12.00</Typography>
            <Typography className={classes.cardTextRight}>
              EGP 388.00
            </Typography>
            <Typography className={classes.cardTextRight}>
              -EGP 26.00
            </Typography>
          </Box>
        </Box>
        <Divider style={{ width: "100%" }} />
        <div className={classes.cardDetails}>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "700", textAlign: "left", color: "#B12704" }}
          >
            Order Summary
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "700", textAlign: "right", color: "#B12704" }}
          >
            EGP 362.00
          </Typography>
        </div>
      </div>
      <div className={classes.cardFooter}>
        <Typography className={classes.cardFooterText}>
          How are shipping cost calculated?
        </Typography>
      </div>
    </Box>
  );
};

export default OrderSummary;
