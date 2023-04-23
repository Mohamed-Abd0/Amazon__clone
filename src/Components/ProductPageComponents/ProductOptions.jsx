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
import { setPerchasedItems } from "../../Store/checkout_slice/checkoutSlice";
import words from "./../../leng.json";

const ProductOptions = () => {
  console.log("option is runing ");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  const { items } = useSelector(({ CartSlice }) => CartSlice);

  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];

  // extract data from the product
  const seller = product.seller[`${lengActive.lang}`];
  const shipCompany = product.shipCompany[`${lengActive.lang}`];
  const count = product.count;

  // get translated words
  const deliveryToEgypt = activWrods.DeliveryToEgypt;
  const only = activWrods.only;
  const leftInStock = activWrods.leftInStock;
  const orderSoon = activWrods.orderSoon;
  const payment = activWrods.payment;
  const deliveredBy = activWrods.deliveredBy;
  const soldBy = activWrods.soldBy;
  const secureTransaction = activWrods.secureTransaction;



  const handleAddToCart = (e) => {
    e.preventDefault();
    // Retrieve cart items from local storage if they exist
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // add the product to the cartItems 
    cartItems.push(product);
    // overwrite the cartItems in localstorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // update the cartItems in the store [redux]
    dispatch(addToCart(product));
    navigate("/cart");
    console.log(items);
  };

  const checkoutHandler = (e)=>{
    e.preventDefault();

    // send the product to perchasedItems in the store
    dispatch(setPerchasedItems(product))

    navigate("/payment");
  }

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

        <DiscountedOptionsPrice />


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
          {`${only} ${count} ${leftInStock} - ${orderSoon} `}
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
          <BuyNowBtn onCheckout= {checkoutHandler} />
        </Box>

        {/* //---------------------------------------------------------------- */}

 
          <Grid container spacing={2} sx={{ fontSize: "9px" , my:"2px"}}>
            <Grid item>
              <Typography variant="body2">{payment}</Typography>

              <Typography variant="body2">{deliveredBy}</Typography>

              <Typography variant="body2">{soldBy}</Typography>
            </Grid>

            <Grid item>
              <Typography variant="body2">{secureTransaction}</Typography>

              <Typography variant="body2">{shipCompany}</Typography>

              <Typography variant="body2">{seller}</Typography>
            </Grid>
          </Grid>

        {/* //---------------------------------------------------------------- */}
        <Divider />

        <Box sx={{ mt: { xs: "auto", md: "0" } }}>
          <AddToListBtn />
        </Box>

        {/* //---------------------------------------------------------------- */}
      </Stack>
    </Box>
  );
};

export default ProductOptions;
