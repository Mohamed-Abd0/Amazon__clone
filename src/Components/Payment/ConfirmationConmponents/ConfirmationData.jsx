import { Box, Radio, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import words from "../../../leng.json";
import SelectItem from "../../Cart/cartItemComponents/productData/SelectItem";
import useStyles from "../styles";
import { deleteFromCart } from "../../../Store/CartSlice";

const ConfirmationData = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const lengActive = useSelector(({ leng }) => leng);
  const activeWords = words[`${lengActive.lang}`];

  const deleteFromCartHandler = () => {
    dispatch(deleteFromCart(item));
  };

  const img = item.mainImg;
  const title = item.minTitle[`${lengActive.lang}`];
  const price = item.price;
  const seller = item.seller[`${lengActive.lang}`];
  const ShippingFree = item.ShippingFree;

  console.log(item);

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "150px",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "45%",
        }}
      >
        <Box>
          <img
            src={img}
            alt="img"
            style={{ width: "350px", height: "100px", padding: "10px" }}
          />
        </Box>
        <Box style={{ padding: "10px" }}>
          <Typography
            variant="subTitle1"
            style={{
              fontWeight: "500",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {title}
          </Typography>
          <Typography style={{ color: "#B12704", fontWeight: "600" }}>
            {" "}
            EGP {price}.00
          </Typography>
          <SelectItem
            style={{ width: "200px", height: "50px" }}
            product={item}
            deleteFromCartHandler={deleteFromCartHandler}
          />
          <Typography style={{ color: "#565959", fontSize: "12px" }}>
            Sold by: {seller}
          </Typography>
        </Box>
      </Box>

      {/* _______________________________________________*/}

      <Box style={{ width: "45%" }}>
        <Typography
          variant="subTitle1"
          style={{
            fontWeight: "500",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          Choose a delivery option:
        </Typography>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box style={{}}>
            <Radio
              size="small"
              style={{
                color: "#005CC8",
                width: "14px",
                height: "14px",
                margin: "0 5px",
                marginTop:'0px'
              }}
              label=""
            />
          </Box>
          <Box style={{}}>
            <Typography
              variant="subTitle2"
              style={{ fontSize: "14px", lineHeight: "20px" }}
            >
              FREE Standard delivery{" "}
              <span style={{ color: "#007600" }}>
                — Get it TOMORROW, 19 June
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmationData;
