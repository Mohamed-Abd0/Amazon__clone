import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from "@mui/material";
import { addProductToCart } from '../../Store/product_slice/CartSlice';

const ProductOptions = () => {

    const {product, amount} = useSelector(({ProductSlice}) => ProductSlice)

    const action = useDispatch();

  return (
    <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          button: {
            textTransform: "capitalize",
            minWidth: "150px",
            fontSize: "12px",
            ":active" : {transform : "scaleX(1.019)"}
          },
        }}
      >
        <Button
          sx={{
            backgroundColor: "background.secondary",
            color: "black",
            ":hover": {
              backgroundColor: "background.secondary",
            },
          }}
          variant="contained"
          onClick={() => action(addProductToCart({product, amount : amount}))}
        >
          add to card
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "background.primary",
            color: "black",
            ":hover": {
              backgroundColor: "background.primary",
            },
          }}
        >
          buy now
        </Button>
      </Box>
  )
}

export default ProductOptions