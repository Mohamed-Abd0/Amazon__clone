import { useSelector, useDispatch } from "react-redux";

import { Stack, Box, CardMedia } from "@mui/material";
import { setCurrentImg } from "../../Store/ProductSlice";

const ProductImg = () => {
  console.log("productImg is running");

  // get product data from the product slice [redux]
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);

  // get the main image of product from product slice
  const { currentImg } = useSelector(({ ProductSlice }) => ProductSlice);

  const dispatch = useDispatch();


  
  const renderinOthersIms = () => {
    // Combine the main image and the thumbnail images into one array
    const images = [product.mainImg, ...product.images];
  
    return images.map((item, index) => (
      <Box
        key={index}
        sx={{
          border: `${item === currentImg ? "1px solid transparent" : "1px solid gray"}`,
          boxShadow: `${item === currentImg ? "0px 0px 2px 2px orange" : ""}`,
          p: 0.3,
          cursor: "pointer",
        }}
        onMouseOver={() => dispatch(setCurrentImg(item))}
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
        top: "10px",
        // maxHeight: { md: "400px" },
        // minWidth: { lg: "400px" },  
      }}
      gap={1}
    >


      <Stack
        gap={1}
        justifyContent="flexStart"
        flexDirection={{ xs: "row", sm: "column" }}
        sx={{ order: { xs: 2, sm: 1 } }}
      >

        {renderinOthersIms()}
      </Stack>

      <Box
        sx={{
          // height:'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          order: { xs: 1, sm: 2 },
          flexGrow: 1,
        }}
      >
        
        <CardMedia
          component="img"
          src={currentImg}
          sx={{
            width:{lg:'100%' },
            maxWidth:{xs:'400px' , lg:'600px'},
            objectFit: "contain",
            
          }}
        />
      </Box>
    </Stack>
  );
};

export default ProductImg;
