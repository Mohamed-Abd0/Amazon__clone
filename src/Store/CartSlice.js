import { createSlice } from "@reduxjs/toolkit";

const savedItems = localStorage.getItem('product');

const initialState = {
  items: savedItems ? JSON.parse(savedItems) : [],
}

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItems = state.items;
      const updatedItems = [...existingItems, payload];
      localStorage.setItem('product', JSON.stringify(updatedItems));
      state.items = updatedItems;
    },
    deleteFromCart: (state, { payload }) => {
        const existingItems = state.items;
        const updatedItems = existingItems.filter(items => items.id !== payload.id);
        localStorage.setItem('product', JSON.stringify(updatedItems));
        state.items = updatedItems;
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('product');
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
