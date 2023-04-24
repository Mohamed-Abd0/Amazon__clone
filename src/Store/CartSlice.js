import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem('cartItems');
const savedItems = localStorage.getItem('savedItems')

const initialState = {
  cartItems: savedItems ? JSON.parse(cartItems) : [],
  savedItems: savedItems ? JSON.parse(savedItems) : [],
}

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItems = state.cartItems;
      const updatedItems = [...existingItems, payload];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      state.cartItems = updatedItems;
    },
    deleteFromCart: (state, { payload }) => {
        const existingItems = state.cartItems;
        const updatedItems = existingItems.filter(item => item.id !== payload.id);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        state.cartItems = updatedItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    },

    // list reducers
    addToSavedItems: (state, { payload }) => {
      const existingItems = state.savedItems;
      const updatedItems = [...existingItems, payload];
      localStorage.setItem('savedItems', JSON.stringify(updatedItems));
      state.savedItems = updatedItems;
    },
    deleteFromSavedItems: (state, { payload }) => {
        const existingItems = state.savedItems;
        const updatedItems = existingItems.filter(item => item.id !== payload.id);
        localStorage.setItem('savedItems', JSON.stringify(updatedItems));
        state.savedItems = updatedItems;
    },


  },
});

export const { addToCart, deleteFromCart, clearCart , addToSavedItems , deleteFromSavedItems} = CartSlice.actions;

export default CartSlice.reducer;
