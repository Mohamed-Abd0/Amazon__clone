import EmptyCartItem from "./EmptyCartItem";
import CartItems from "./CartItems"; 
import { useSelector } from "react-redux";
import { Box, Paper } from "@mui/material";

function CartContent() {
  const cartItems = useSelector((state) => state.CartSlice.items);

  return (
    <Box  sx={{ backgroundColor: "transparent", display: "flex", flexDirection: "column",}} spacing={2}>
      <Paper >
        {cartItems === 0 ? <EmptyCartItem /> : <CartItems />}
      </Paper> 
    </Box>
  );
}

export default CartContent;
