import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";
import lengRedusers from "./nav_slice/lengRedusers";
import cartItemNumber from "./nav_slice/cartRedusers";
import nameUserSlice from "./nav_slice/nameRedusers";
import chechout from "./checkout_slice/checkoutSlice";
import userSlice from "./nav_slice/userSlice";

export default configureStore({
  reducer: {
    ModalSlice,
    ProductSlice,
    CartSlice,
    leng: lengRedusers,
    chechout,
    cartItemNumber,
    nameUserSlice,
    user: userSlice,
  },
});
