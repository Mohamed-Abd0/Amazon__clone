import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Stack,Box, Typography,IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { increment, decrement } from '../../Store/product_slice/ProductSlice';


const ProductQuantaty = () => {

  const {amount} = useSelector(({ProductSlice}) => ProductSlice);

  const action = useDispatch();


  return (
    <Stack flexDirection="row" alignItems="center" gap={2} justifyContent={{xs : "space-between", sm : "flex-start"}}>
      <Typography variant="h6">amount : {amount}</Typography>
      <Box sx={{button : {border : "1px solid gray" ,padding: "3px"}, "button:last-child" : {ml : 1}}}>
        <IconButton color="black" onClick={() => action(increment()) }>
          <AddIcon /> 
        </IconButton>
        <IconButton color="black" onClick={() => action(decrement()) }>
          <RemoveIcon /> 
        </IconButton>
      </Box>
    </Stack>
  )
}

export default ProductQuantaty