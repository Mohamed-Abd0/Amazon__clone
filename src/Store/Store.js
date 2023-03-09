import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./product_slice/ModalSlice";
import ProductSlice from "./product_slice/ProductSlice";
import CartSlice from "./product_slice/CartSlice";
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
