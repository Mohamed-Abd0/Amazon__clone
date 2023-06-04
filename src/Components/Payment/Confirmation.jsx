import React from "react";
import { useSelector } from "react-redux";
import ProductData from "../Cart/cartItemComponents/ProductData";
import { Divider, Stack, Box } from "@mui/material";
import SendOrder from "./ConfirmationConmponents/SendOrder";

const Confirmation = () => {
  const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);
  const selectedItems = cartItems.filter((item) => item.selected === true);

  return (
    <div className="m-4 ">
      {/* item */}
      <Stack>
        {selectedItems.map((item, idx) => (
          <Box key={idx}>
            <ProductData item={item} />
            {idx !== cartItems.length - 1 && (
              <Divider sx={{ margin: "20px 0 10px 0 " }} />
            )}
          </Box>
        ))}
      </Stack>
      <SendOrder />
    </div>
  );
};

export default Confirmation;
