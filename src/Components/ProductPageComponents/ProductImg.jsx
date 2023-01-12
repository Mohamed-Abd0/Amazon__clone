import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Stack, Box, CardMedia } from "@mui/material";
import { setCurrentImg } from "../../Store/product_slice/ProductSlice";
const ProductImg = () => {
  const {
    product: { productImgs },
    currentImg,
  } = useSelector(({ ProductSlice }) => ProductSlice);

  const action = useDispatch();

  const renderinOthersIms = () =>
    productImgs?.map((item, index) => (
      <Box
        key={index}
        sx={{
          border: `${
            item.src === currentImg ? "1px solid transparent" : "1px solid gray"
          }`,
          boxShadow: `${
            item.src === currentImg ? "0px 0px 2px 2px orange" : ""
          }`,
          p: 0.3,
          cursor: "pointer",
        }}
        onClick={() => action(setCurrentImg(item.src))}
      >
        <CardMedia
          component="img"
          src={item.src}
          sx={{ width: "40px", height: "45px", objectFit: "contain" }}
        />
      </Box>
    ));

  return (
    <Stack
      flexDirection={{ xs: "column", sm: "row" }}
      sx={{position : {md : "sticky"},top : "80px",maxHeight: { md : "400px"} ,width: { md: "40%" } }}
      gap={3}
    >
      <Stack
        gap={1}
        justifyContent="center"
        flexDirection={{ xs: "row", sm: "column" }}
        sx={{ order: { xs: 2, sm: 1 } }}
      >
        {renderinOthersIms()}
      </Stack>
      <Box sx={{ flexGrow: 1, order: { xs: 1, sm: 2 } }}>
        <CardMedia
          src={currentImg}
          component="img"
          sx={{
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Stack>
  );
};

export default ProductImg;
