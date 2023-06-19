import { Box, Divider, Radio, Typography } from "@material-ui/core";

import addAddress from "../../assets/payment/addAddress.png";
import cardLogo from "../../assets/payment/card-logo-compact.gif";
import useStyles from "./styles";
import YellowBtn from "./shippingform/YellowBtn";
import TextSpan from "../ReuseableComponets/TextSpan";

//=====================================================================
const PaymentForm = ({ nextStep }) => {
  const classes = useStyles();
  const SubmitHandler = (e) => {  
     
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
              Your credit and debit cards
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
            <img
              src={cardLogo}
              alt=""
              style={{ width: "35px", height: "20px", margin: " 0 10px 0 7px" }}
            />
            <TextSpan>Add a credit or debit card {">"} </TextSpan>
          </Box>
        </Box>

        {/* ********************************* */}

        <Box style={{ margin: "10px 0", width: "100%", textAlign: "left" }}>
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Other payment options
            </Typography>
          </Box>

          <Divider style={{ width: "100%" }} />

          <Box
            style={{ 
              textAlign: "left",
              display: "flex", 
              justifyContent: "space-between",
              cursor: "pointer",
              padding: "5px 0",
              margin: "7px",
              border: "1px solid #fbd8b4",
              borderRadius: "5px",
              backgroundColor: "#fcf5ee",
            }}
          >
            
              <Box style={{ width: '40px'}}> 
                <Radio size="small" style={{ color: "#005CC8", marginTop:'0px' }} label="" />
              </Box>
              <Box style={{ fontSize: '13px'}}>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Cash on Delivery (COD)
                </Typography>
                <Typography variant="subtitle2" style={{ }}>
                  Pay by cash on delivery. Non-refundable COD fees of EGP 12 may
                  apply. Learn more. Pay online for contactless deliveries.
                </Typography>
              </Box>
            
          </Box>
        </Box>
      </div>
      <div className={classes.cardFooter}>
        <YellowBtn OnAction={SubmitHandler}>Use this payment method</YellowBtn>
      </div>
    </Box>
  );
};

export default PaymentForm;
