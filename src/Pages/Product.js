import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "../Store/ProductSlice";
import { useParams } from "react-router-dom";
import getProductData from "../Firebase-APIS/Product/getProductData";
import {
  Breadcrumb,
  ProductImg,
  ProductContent,
  SuggestProducts,
  ProductOptions,
} from "../Components/ProductPageComponents";
import {  Grid, Stack } from "@mui/material";

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
  }, [productId]);

  // render the content if the product object is full
  let content;
  if (product) {
    content = (
      <Fragment>
        <Stack  sx={{ mx: '1rem' }}>
          <Grid item xs={12} display={{xs: 'none' , md:'flex'}}>
            <Breadcrumb />
          </Grid>
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item xs={12} md={8} lg={9} >
              <Grid container justifyContent={{ lg: "space-between" }} spacing={2}>
                <Grid item xs={12} lg={7}>
                  <ProductImg />
                </Grid>
                <Grid item xs={12} lg={5}>
                  <ProductContent />
                </Grid>
              </Grid>
            </Grid>
            <Grid item  md={4} lg={3}>
              <ProductOptions />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <SuggestProducts />
          </Grid>
        </Stack>
      </Fragment>
    );
  } else {
    content = null;
  }

  return content;
};

export default Product;
