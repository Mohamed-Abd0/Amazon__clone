import React from "react";
import { useSelector } from "react-redux";
import {
  Stack,
  Box,
  Grid,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import AddToCartBtn from "../ReuseableComponets/AddToCartBtn";
import BuyNowBtn from "../ReuseableComponets/BuyNowBtn";
import AddToListBtn from "../ReuseableComponets/AddToListBtn";

const ProductOptions = () => {
  console.log("ProductOptions is runing");
  
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  console.log(product);

  const price = product.price;
  const seller = product.seller[1];
  const ShippingFree = product.shippingFree;
  const shipCompany = product.shipCompany.en;
  const count = product.count;


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

        <Box
          variant="body1"
          sx={{
            span: { fontSize: "12px" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack flexDirection="row">
            <span>EGP </span>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "400",
                marginTop: "-6px",
              }}
            >
              {price}
            </div>
            <span> 00</span>
          </Stack>
        </Box>

        {/* //---------------------------------------------------------------- */}

        <Typography variant="body2">
          {ShippingFree ? "FREE delivery April 11 - 12" : "FREE delivery"}{" "}
          <br />
          <Link underline="hover">Details</Link>
        </Typography>

        {/* //---------------------------------------------------------------- */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LocationOnTwoToneIcon />
          <Link underline="hover" sx={{ ml: 0.5 }}>
            Delivery to egypt
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
          <AddToCartBtn />
          <BuyNowBtn />
        </Box>

        {/* //---------------------------------------------------------------- */}

        <Box
          sx={{
            "p span": { mr: "8px", float: "right" },
            "p:first-of-type": { mb: 0.6 },
          }}
        >
          <Grid container spacing={3} sx={ {fontSize: "9px"}}>
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
