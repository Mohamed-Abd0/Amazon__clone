import React from "react";
import { useSelector } from "react-redux";
import ProductData from "../Cart/cartItemComponents/ProductData";
import { Divider, Stack, Box } from "@mui/material";
import SendOrder from "./ConfirmationConmponents/SendOrder";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import ConfirmationData from "./ConfirmationConmponents/ConfirmationData";
import moment from "moment";
import YellowBtn from "./shippingform/YellowBtn";
import TextSpan from "../ReuseableComponets/TextSpan";

const currentDate = moment();
const tomorrowDate = currentDate.add(2, "days").format("D MMMM YYYY");

const Confirmation = () => {
  const classes = useStyles();

  const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);
  // const selectedItems = cartItems.filter((item) => item.selected === true);

  // ______________ Products Data _________________

  return (
    <>
      <Box className={classes.card} style={{ marginLeft: "50px" }}>
        <div className={classes.cardContainer}>
          <Typography
            style={{
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: "700",
              color: "#c45500",
            }}
          >
            Estimated delivery: {tomorrowDate}
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              color: "#565959",
            }}
          >
            Items shipped from amazon.eg
          </Typography>
          <Box className={classes.FlexBoxy}>
            {cartItems.map((item, idx) => (
              <Box key={idx}>
                <ConfirmationData item={item} tomorrowDate={tomorrowDate} />
                {idx !== cartItems.length - 1 && (
                  <Divider
                    sx={{
                      margin: "20px 0 10px 0 ",
                      backgroundColor: "#BBBFBF",
                      height: "0.5px",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </div>
      </Box>

      {/*________________________________________________________________________*/}

      <Box style={{ padding: "10px" }}></Box>

      {/*________________________________________________________________________*/}

      <Box className={classes.card} style={{ marginLeft: "50px" }}>
        <Box
          style={{
            padding: "1rem 1.2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ width: "20%" }}>
            <YellowBtn>Place your order</YellowBtn>
          </Box>
          <Box style={{ width: "79%" }}>
            <Typography
              style={{
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: "700",
                color: "#c45500",
              }}
            >
              Order total:EGP 1,002.00
            </Typography>
            <Typography
              style={{
                color: "#565959",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              By placing your order, you agree to Amazon's <TextSpan>privacy notice</TextSpan> and <TextSpan> conditions of use</TextSpan>.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Confirmation;
