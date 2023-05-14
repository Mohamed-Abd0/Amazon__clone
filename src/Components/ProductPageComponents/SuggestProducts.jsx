import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import SwiperContainer from "../ReuseableComponets/SwiperContainer";
import { suggestProductsBP } from "../../Constants/Constants";
import { getProductsByGategory } from "../../Firebase-APIS/FirebaseFunctions";



const SuggestProducts = () => {
  console.log("SuggestProducts is running");
  const [categoryProducts ,setCategoryProducts]= useState([])
  const navigate = useNavigate();
  // const categoryType = useParams()

  // Active lang
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;
  
  // get the product from the store 
  const productData = useSelector(({ProductSlice})=> ProductSlice.product);
  console.log(productData);


  useEffect(()=>{
    getProductsByGategory(`category.${activeLeng}`, productData.category[`${activeLeng}`])
    .then((res)=>{
        console.log(res);
        setCategoryProducts(res);
      })
    .catch((err)=>{
        console.log(err);
      })
  } , [])

console.log(categoryProducts[0]?.minTitle[`${activeLeng}`].join(""))


  const productsRendering = () =>
  categoryProducts.map((product) => (
      <Box
        key={product.id}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
      >
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia
            src={product?.mainImg}
            component="img"
            sx={{
              minWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <CardContent>
            <Typography variant="body2">
              {categoryProducts[0]?.minTitle[`${activeLeng}`].join(" ")}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ));



    
  return (
    <Box sx={{ mt: { xs: 8, lg: 16 }, mb: 3, width: "95%", mx: "auto" }}>
      <SwiperContainer breakPoints={suggestProductsBP}>
        {productsRendering()}
      </SwiperContainer>
    </Box>
  );
};

export default SuggestProducts;
