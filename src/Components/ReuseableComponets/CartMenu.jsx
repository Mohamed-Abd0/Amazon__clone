import React from 'react'
import {  useDispatch } from 'react-redux';

import { Box, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { overlayfunc } from '../../Store/product_slice/ModalSlice';

const CartMenu = () => {
  const action = useDispatch();

  return (
    <Box sx={{position : "fixed", right: "0", zIndex:  9}} onClick={() => action(overlayfunc(true))}>
      <IconButton sx={{borderRadius : "4px 0 0 4px", backgroundColor :"#232f3e", color: "white", ":hover" : {backgroundColor : "#232f3e"}}}>
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  )
}

export default CartMenu