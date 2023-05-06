import { Box, Checkbox, Divider, Typography } from "@mui/material";
import React from "react";
import UnderLineSpan from "../../ReuseableComponets/UnderLineSpan";
import { useDispatch } from "react-redux";
import { deleteFromCart, addToSavedItems } from "../../../Store/CartSlice";
import SelectItem from "./productData/SelectItem";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductData = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();

  const deleteFromCartHandler = () => {
    dispatch(deleteFromCart(item));
  };

  const savedLaterHandler = () => {
    dispatch(addToSavedItems(item));
    dispatch(deleteFromCart(item));
  };
  // ____ Product Data ____
  const mainImg = item.mainImg;
  const minTitle = item.minTitle.en;
  const price = item.price; 
  // ______________________

   

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        fontSize: "14px",
        height: "200px",
        lineHeight: "1.3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "60%",
        }}
      >
        {/* image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            paddingRight: "15px",
          }}
        >
          <Checkbox
            {...label}
            defaultChecked
            color="default"
            sx={{
              margin: "0",
              padding: "0",
              "&.Mui-checked": {
                color: "#007185",
              },
            }}
          />
          <img width={170} height={170} src={mainImg} alt="" />
        </Box>
        {/*________*/}

        {/* details */}
        <Box sx={{ paddingLeft: "10px" }}>
          {/* ____TiTle____ */}
          <div className="flex justify-between maxmd:mt-4">
            <Typography
              variant="subTitle1"
              sx={{ fontSize: "18px", lineHeight: "1.3rem" }}
            >
              {minTitle}
            </Typography>
          </div>

          {/* ____Stock____ */}
          <Box sx={{ fontSize: "12px", lineHeight: "16px", margin: "8px 0" }}>
            <Typography variant="caption" sx={{ color: "#007600" }}>
              In stock
            </Typography>
            <br />
            <Typography variant="caption" sx={{ color: "#565959" }}>
              Eligible for FREE delivery
            </Typography>
          </Box>

          <div className="flex flex-row flex-wrap space-x-5 items-center ">
            <div className="relative">
              <SelectItem item={item} deleteFromCartHandler={deleteFromCartHandler}  />
            </div>

            <Divider orientation="vertical" flexItem />

            <UnderLineSpan onAction={deleteFromCartHandler}>Delete </UnderLineSpan>

            <Divider orientation="vertical" flexItem />

            <UnderLineSpan onAction={savedLaterHandler}> Save for later </UnderLineSpan>

            <Divider orientation="vertical" flexItem />

            <UnderLineSpan>Share</UnderLineSpan>
          </div>
        </Box>
      </Box>
      {/*________*/}

      {/* Price */}
      <Box>
        <Typography
          variant="subTitle2"
          sx={{ fontSize: "18px", fontWeight: "600", width: "30%" }}
        >
          EGP {price}
        </Typography>
      </Box>
      {/*________*/}
    </Box>
  );
};

export default ProductData;
