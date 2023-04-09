import { useSelector, useDispatch } from "react-redux";

import { Stack, Box, CardMedia } from "@mui/material";
import { setCurrentImg } from "../../Store/ProductSlice";

const ProductImg = () => {
  console.log("productImg is running");

  // get product data from the product slice [redux]
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);

  // get the main image of product from product slice
  const { currentImg } = useSelector(({ ProductSlice }) => ProductSlice);

  const action = useDispatch();


  
  const renderinOthersIms = () => {
    // Combine the main image and the thumbnail images into one array
    const images = [product.mainImg, ...product.images];
  
    return images.map((item, index) => (
      <Box
        key={index}
        sx={{
          border: `${
            item === currentImg ? "1px solid transparent" : "1px solid gray"
          }`,
          boxShadow: `${item === currentImg ? "0px 0px 2px 2px orange" : ""}`,
          p: 0.3,
          cursor: "pointer",
        }}
        onMouseOver={() => action(setCurrentImg(item))}
      >
        <CardMedia
          component="img"
          src={item}
          sx={{ width: "40px", height: "45px", objectFit: "contain" }}
        />
      </Box>
    ));
  };
  


    
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
