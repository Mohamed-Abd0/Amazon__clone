import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    currentImg: "",
    amount: 1,
  },
  reducers: {
    getProductFromParam: (state, { payload }) => {
      state.product = payload;
      state.currentImg = payload.productImgs.find((e) => e.state === true).src;
      state.amount = 1;
    },
    setCurrentImg: (state, { payload }) => {
      state.currentImg = payload;
    },
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      if (state.amount >= 2) {
        state.amount -= 1;
      }
    },
  },
});

export const { getProductFromParam, setCurrentImg, increment, decrement } =
  ProductSlice.actions;

export default ProductSlice.reducer;
