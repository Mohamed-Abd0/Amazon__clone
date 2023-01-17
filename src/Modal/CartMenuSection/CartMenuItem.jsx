import React from 'react'
import { Box, Stack, CardMedia, Typography } from '@mui/material'

const CartProductItem = ({item}) => {

    const {product, amount} = item;


  return (
    <Stack flexDirection="row" gap={3} justifyContent="space-between" sx={{position : "relative" }}>
        <Box sx={{width: "80px", }}>
            <CardMedia component="img" src={product?.productImgs[0].src}/>
        </Box>
        <Box sx={{width:"70%"}}>
            <Typography sx={{ overflow : "hidden", whiteSpace : "nowrap", textOverflow : "ellipsis"}} variant="body2">{product?.productDetails.title}</Typography>
            <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
            <Typography variant="body2" sx={{display : "flex",span : {fontSize : "10px", }, my : 1}}>
                <span>$</span>
                {product?.productDetails.price}
                <span>00</span>
                </Typography>
                <Typography variant="body2">
                    {amount} pices
                </Typography>
            </Stack>
        </Box>
    </Stack>
  )
}

export default CartProductItem