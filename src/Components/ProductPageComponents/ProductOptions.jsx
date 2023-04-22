import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Box, Grid, Typography, Link, Divider } from "@mui/material";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import AddToCartBtn from "../ReuseableComponets/AddToCartBtn";
import BuyNowBtn from "../ReuseableComponets/BuyNowBtn";
import AddToListBtn from "../ReuseableComponets/AddToListBtn";
import DiscountedOptionsPrice from "./ProductOptions/DiscountedOptionsPrice";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../Store/CartSlice";
import words from "../../leng.json";

const ProductOptions = () => {
  console.log("option is runing ");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  

  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  const { items } = useSelector(({ CartSlice }) => CartSlice);
 
  const seller = product.seller[1]; 
  const shipCompany = product.shipCompany.en;
  const count = product.count;

  // get translated words
  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];
  const deliveryToEgypt = activWrods.DeliveryToEgypt

  const handleAddToCart = (e) => {
    e.preventDefault();
 
    // Dispatch the addToCart action to add the product to the cart
    dispatch(addToCart(product));

    // nagigate to the cart page
    navigate("/cart");
    console.log(items);
  };


  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "border.gray",
        padding: "7px",
        maxWidth: { xs: "260px" },
        borderRadius: { md: "10px" },
        height: "410px",
        overflow: "hidden",
        svg: { fontSize: "16px" },
        top: { xs: "0", md: "50px" },
        right: 0,
        backgroundColor: "white",
        zIndex: { xs: 32, md: 9 },
      }}
      gap={1.3}
    >
      <Stack
        sx={{
          height: "100%",
          px: 1.5,
          pt: 2.5,
          "& p": { fontSize: "12.5px", color: "text.gray" },
          a: { fontSize: "13px", color: "text.teal", cursor: "pointer" },
          "a:hover": { color: "text.darkOrange" },
          gap: "0.6rem",
        }}
      >
        {/* //-------------------Price--------------------------------------- */}

        <DiscountedOptionsPrice/>

        {/* //---------------------------------------------------------------- */}



        {/* //---------------------------------------------------------------- */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LocationOnTwoToneIcon />
          <Link underline="hover" sx={{ ml: 0.5 }}>
            {deliveryToEgypt}
          </Link>
        </Box>

        {/* //---------------------------------------------------------------- */}

        <Typography
          variant="h6"
          sx={{
            color: "#8B1111",
            fontWeight: "800",
            fontSize: "14px",
          }}
        >
          Only {count} left in stock - order soon
        </Typography>

        {/* //---------------------------------------------------------------- */}

        <Box
          sx={{
            Button: {
              width: "100%",
            },
            "button:first-of-type": { mb: 1 },
          }}
        >
          <AddToCartBtn handleAddToCart={handleAddToCart} />
          <BuyNowBtn />
        </Box>

        {/* //---------------------------------------------------------------- */}

        <Box
          sx={{
            "p span": { mr: "8px", float: "right" },
            "p:first-of-type": { mb: 0.6 },
          }}
        >
          <Grid container spacing={3} sx={{ fontSize: "9px" }}>
            <Grid item>
              <Typography variant="body2">Payment</Typography>

              <Typography variant="body2">Delivered by</Typography>

              <Typography variant="body2">Sold by</Typography>
            </Grid>

            <Grid item>
              <Typography variant="body2">Secure transaction</Typography>

              <Typography variant="body2">{shipCompany}</Typography>

              <Typography variant="body2">{seller}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider />
        {/* //---------------------------------------------------------------- */}

        <Box sx={{ mt: { xs: "auto", md: "0" } }}>
          <AddToListBtn />
        </Box>

        {/* //---------------------------------------------------------------- */}
      </Stack>
    </Box>
  );
};

export default ProductOptions;
