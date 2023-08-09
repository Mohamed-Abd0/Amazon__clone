import { useSelector } from "react-redux";

import { Stack, Box, CardMedia } from "@mui/material";
import { useState } from "react";

const ProductImg = () => {
  console.log("productImg is running");

  // get product data from the product slice [redux]
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  const currentImg = product.mainImg

  const [currentImage , setCurrentImage] = useState(currentImg)



  
  const renderThumbnailImages = () => {
    // Combine the main image and the thumbnail images into one array
    const images = [product.mainImg, ...product.images];
  
    return images.map((item) => (
      <Box
        key={item}
        sx={{
          border: `${item === currentImage ? "1px solid transparent" : "1px solid gray"}`,
          boxShadow: `${item === currentImage ? "0px 0px 2px 2px orange" : ""}`,
          p: 0.3,
          cursor: "pointer",
        }}
        onMouseOver={() => setCurrentImage(item)}
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
      }}
      gap={1}
    >


      <Stack
        gap={1}
        justifyContent={{sx:'center' , sm:"flexStart"}}
        flexDirection={{ xs: "row", sm: "column" }}
        sx={{ order: { xs: 2, sm: 1 } }}
      >

        {renderThumbnailImages()}
      </Stack>

      <Box
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'flexStart',
          order: { xs: 1, sm: 2 },
          flexGrow: 1,
        }}
      >
        
        <CardMedia
          component="img"
          src={currentImage}
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
