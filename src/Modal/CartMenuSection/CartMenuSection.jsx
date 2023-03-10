import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { allModalsState } from "../../Store/ModalSlice";
import CartMenuItem from "./CartMenuItem";

const CartMenuSection = () => {
  const {
    CartSlice: { items },
    ModalSlice: { cartMenuSectionState },
  } = useSelector((state) => state);

  const action = useDispatch();

  const renderCartItems = () => {
    return items.map((item, idx) => (
      <CartMenuItem key={`${item.product.id}00${idx}`} item={item} />
    ));
  };

  return (
    <Box
      sx={{
        position: "absolute",
        ...(cartMenuSectionState ? { right: "0px" } : { right: "-350px" }),
        width: { xs: "100%", sm: "400px" },
        height: "100%",
        backgroundColor: "white",
        transition: "1s all",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <IconButton
        sx={{ position: "absolute", top: "16px", left: "8px" }}
        onClick={() => action(allModalsState(false))}
      >
        <CloseIcon />
      </IconButton>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            p: 2,
            textAlign: "center",
            borderBottom: "1px solid lightgray",
          }}
        >
          cart items
        </Typography>
        <Stack
          sx={{ p: 2, maxHeight: "calc(100vh - (70px))", overflow: "auto" }}
          gap={3}
        >
          {renderCartItems()}
        </Stack>
      </Box>
    </Box>
  );
};

export default CartMenuSection;
