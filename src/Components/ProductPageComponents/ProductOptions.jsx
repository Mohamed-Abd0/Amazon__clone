import React from "react";
import { useSelector } from "react-redux";
import {
  Stack,
  Box,
  IconButton,
  Typography,
  Link,
  Slide,
  useMediaQuery,
} from "@mui/material";
import useCurrentProduct from "../../Hooks/useCurrentProduct";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddToCartBtn from "../ReuseableComponets/AddToCartBtn";
import BuyNowBtn from "../ReuseableComponets/BuyNowBtn";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AddToListBtn from "../ReuseableComponets/AddToListBtn";
import CloseFloatingSection from "../ReuseableComponets/CloseFloatingSection";
import ProductQuantaty from "./ProductQuantaty";

const ProductOptions = () => {
  const { price } = useCurrentProduct("productDetails");

  const { productOptionsState } = useSelector(({ ModalSlice }) => ModalSlice);

  const mediaQuery = useMediaQuery("(min-width:900px)");

  return (
    <Slide
      direction="left"
      in={(!productOptionsState && mediaQuery) || productOptionsState}
      mountOnEnter
      unmountOnExit
    >
      <Box
        sx={{
          border: "1px solid",
          borderColor: "border.gray",
          maxWidth: { xs: "320px", md: "270px" },
          borderRadius: { md: "10px" },
          height: { xs: "100vh", md: "600px" },
          overflow: "auto",
          svg: { fontSize: "16px" },
          position: { xs: "fixed", md: "sticky" },
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
            "a:hover": { color: "text.darkOriange" },
            gap: "0.6rem",
          }}
        >
          <Box
            variant="body1"
            sx={{
              span: { fontSize: "14px" },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {!mediaQuery && <CloseFloatingSection />}
            <Stack flexDirection="row">
              <span>$</span>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  marginTop: "-6px",
                }}
              >
                {price}
              </div>
              <span>00</span>
            </Stack>
          </Box>
          <Typography variant="body2">
            $306.63 Shipping & Import Fees Deposit to United Kingdom
            <Link sx={{ ml: 1 }} underline="hover">
              details
              <IconButton sx={{ p: "0" }}>
                <ExpandMoreIcon />
              </IconButton>
            </Link>
          </Typography>
          <Typography
            variant="body2"
            sx={{ span: { color: "text.green", fontWeight: "600", ml: 0.5 } }}
          >
            Delivery <b>Monday</b>, <b>February 6</b>. Order within
            <span>11 hrs 37 mins</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOnIcon />
            <Link underline="hover" sx={{ ml: 0.5 }}>
              delivery to egypt
            </Link>
          </Box>
          <Typography variant="h6" color="text.green">
            in stock
          </Typography>
          <ProductQuantaty />
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <GppGoodIcon />
            <Link
              underline="hover"
              sx={{
                ml: 0.5,
              }}
            >
              secure transaction
            </Link>
          </Box>
          <Box
            sx={{
              "p span": { mr: "8px", float: "right" },
              "p:first-of-type": { mb: 0.6 },
            }}
          >
            <Typography variant="body2">
              Ships from <span>amazon</span>
            </Typography>
            <Typography variant="body2">
              sold by <span>amazon</span>
            </Typography>
          </Box>
          <Typography variant="body2">
            return policy{" "}
            <Link
              underline="hover"
              sx={{
                ml: 0.5,
              }}
            >
              Eligible for Return, Refund or Replacement within 30 days of
              receipt{" "}
              <IconButton sx={{ p: "0" }}>
                <ExpandMoreIcon />
              </IconButton>
            </Link>
          </Typography>
          <Typography variant="body2">
            support{" "}
            <Link
              underline="hover"
              sx={{
                ml: 0.5,
              }}
            >
              Free Amazon tech support included{" "}
              <IconButton sx={{ p: "0" }}>
                <ExpandMoreIcon />
              </IconButton>
            </Link>
          </Typography>
          <Box sx={{ mt: { xs: "auto", md: "0" } }}>
            <AddToListBtn />
          </Box>
        </Stack>
      </Box>
    </Slide>
  );
};

export default ProductOptions;
