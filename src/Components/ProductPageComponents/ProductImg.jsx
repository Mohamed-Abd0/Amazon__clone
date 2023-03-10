import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Stack, Box, CardMedia } from "@mui/material";
import { setCurrentImg } from "../../Store/ProductSlice";
import useCurrentProduct from "../../Hooks/useCurrentProduct";
const ProductImg = () => {
  const { currentImg } = useSelector(({ ProductSlice }) => ProductSlice);

  const imgsArr = useCurrentProduct("productImgs");

  const action = useDispatch();

  const renderinOthersIms = () =>
    imgsArr?.map((item, index) => (
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

  useEffect(() => {
    const targetImg = imgsArr.find((li) => li.state === true);
    action(setCurrentImg(targetImg.src));
  }, [action, imgsArr]);

  return (
    <Stack
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      sx={{
        position: { lg: "sticky" },
        top: "80px",
        maxHeight: { md: "400px" },
        minWidth: { lg: "400px" },
      }}
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
      <Box
        sx={{
          maxWidth: { lg: "400px" },
          height: "400px",
          order: { xs: 1, sm: 2 },
          flexGrow: 1,
        }}
      >
        <CardMedia
          src={currentImg}
          component="img"
          sx={{
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Stack>
  );
};

export default ProductImg;
