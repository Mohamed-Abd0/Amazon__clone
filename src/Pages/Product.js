import React, { Fragment, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { setProductData } from "../Store/ProductSlice";
import { useParams } from "react-router-dom";
import {
  ProductImg,
  ProductContent,
  SuggestProducts,
  ProductOptions,
} from "../Components/ProductPageComponents";
import { BackToHome, FloatingIcon } from "../Components/ReuseableComponets";
import SettingsIcon from "@mui/icons-material/Settings";
import { Stack, Box } from "@mui/material";
import getProductData from "../Firebase-APIS/Product/getProductData";

const Product = () => {
  console.log("product is running");

  // get productId from the url
  const { productId } = useParams();
  
  const dispatch = useDispatch();

  // get product object from redux store
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);

  useEffect(() => {
    const getProduct = async () => {
      try {
        // get product data from firebase
        const productData = await getProductData(productId);
        console.log(productData);
        // send the product data to product slice in redux
        dispatch(setProductData({ productData }));
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, []);

  // render the content if the product object is full 
  let content;
  if (product) {
    content = (
      <Fragment>
        <Box sx={{ maxWidth: "1400px", m: "auto" }}>
          <Box sx={{ mx: { xs: "1rem", sm: "2rem" } }}>
            <BackToHome />
          </Box>
          <Stack
            flexDirection={{ md: "row" }}
            sx={{ mx: { xs: "1rem", sm: "2rem" } }}
            justifyContent="space-between"
            gap={2}
          >
            <Stack
              flexDirection={{ lg: "row" }}
              sx={{ maxWidth: { xs: "100%", md: "65%", lg: "75%" } }}
              gap={4}
            >
              <ProductImg />
              <ProductContent />
            </Stack>
            <ProductOptions />
          </Stack>
        </Box>
        <SuggestProducts />
      </Fragment>
    );
  } else {
    content = null;
  }





  return content;

  
};

export default Product;
