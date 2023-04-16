import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    // currentImg: null,
    // amount: 1,
  },
  reducers: {
    setProductData: (state, { payload }) => {
      state.product = payload.productData;
      // state.currentImg = payload.productData.mainImg;
      // state.amount = 1;
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

export const { setProductData, setCurrentImg, increment, decrement } =
  ProductSlice.actions;

export default ProductSlice.reducer;
