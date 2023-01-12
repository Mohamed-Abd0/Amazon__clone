import React from 'react'
import {useDispatch, useSelector } from 'react-redux';

import {Stack, Box, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { overlayfunc } from '../Store/product_slice/ModalSlice';
import CartProductItem from '../Components/ProductPageComponents/CartProductItem';


const CartMenuSection = () => {

  const {items} = useSelector(({CartSlice}) => CartSlice);

  const action = useDispatch();

  const renderCartItems = () => {
    return (
      items.map((item, idx) => <CartProductItem key={`${item.product.id}00${idx}`} item={item}/>)
    )
  }


  return (
    <Box sx={{position : "absolute",right: "0",width: {xs : "100%", sm : "400px"}, height: "100%", backgroundColor :"white"}} onClick={(e) => e.stopPropagation()}>
      <IconButton sx={{position: "absolute", top :"16px", left : "8px", }} onClick={() => action(overlayfunc(false))}>
        <CloseIcon />
      </IconButton>
        <Box>
        <Typography variant="h4" sx={{fontWeight: "bold", p : 2, textAlign : "center", borderBottom : "1px solid lightgray"}}>cart items</Typography>
        <Stack sx={{p : 2, maxHeight : "calc(100vh - (70px))", overflow : "auto"}} gap={3}>
          {renderCartItems()}
        </Stack>
        </Box>
    </Box>
  )
}

export default CartMenuSection