import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem("cartItems");
const savedItems = localStorage.getItem("savedItems");

const initialState = {
  cartItems: cartItems ? JSON.parse(cartItems) : [],
  savedItems: savedItems ? JSON.parse(savedItems) : [],
  totalQty: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // cartItems reducer
    addToCart: (state, { payload }) => {
      const existingItems = state.cartItems;
      const updatedItems = [...existingItems, payload];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      state.cartItems = updatedItems;
      state.totalQty += payload.qty; //update total quantity
    },
    deleteFromCart: (state, { payload }) => {
      const existingItems = state.cartItems;
      const updatedItems = existingItems.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      state.cartItems = updatedItems;
      state.totalQty -= payload.qty; //update total quantity
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
      state.totalQty = 0;
    },
    updateTotalQty: (state, { payload }) => {
      const existingItems = state.cartItems;
      const updatedQty = existingItems.reduce((accumulator, current) => {
        if (current.id === payload.id) {
          return (accumulator = payload.qty);
        }
        return accumulator + current.qty;
      }, 0);
      state.totalQty = updatedQty;
    },

    // savedItem reducers
    addToSavedItems: (state, { payload }) => {
      const existingItems = state.savedItems;
      const updatedItems = [...existingItems, payload];
      localStorage.setItem("savedItems", JSON.stringify(updatedItems));
      state.savedItems = updatedItems;
    },
    deleteFromSavedItems: (state, { payload }) => {
      const existingItems = state.savedItems;
      const updatedItems = existingItems.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem("savedItems", JSON.stringify(updatedItems));
      state.savedItems = updatedItems;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  clearCart,
  updateTotalQty,
  addToSavedItems,
  deleteFromSavedItems,
} = CartSlice.actions;

export default CartSlice.reducer;
