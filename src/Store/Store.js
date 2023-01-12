import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./product_slice/ModalSlice";
import ProductSlice from "./product_slice/ProductSlice";
import CartSlice from "./product_slice/CartSlice";
import lengRedusers from "./nav_slice/lengRedusers";
import chechout from "./checkout_slice/checkoutSlice";

export default configureStore({
  reducer: {ModalSlice, ProductSlice, CartSlice , leng : lengRedusers , chechout },
});
