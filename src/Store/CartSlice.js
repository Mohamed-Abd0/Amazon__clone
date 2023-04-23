import { createSlice } from "@reduxjs/toolkit";

const savedItems = localStorage.getItem('product');
const listItems = localStorage.getItem('listItems')

const initialState = {
  cartItems: savedItems ? JSON.parse(savedItems) : [],
  listItems: listItems ? JSON.parse(listItems) : [],
}

const CartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItems = state.cartItems;
      const updatedItems = [...existingItems, payload];
      localStorage.setItem('product', JSON.stringify(updatedItems));
      state.cartItems = updatedItems;
    },
    deleteFromCart: (state, { payload }) => {
        const existingItems = state.cartItems;
        const updatedItems = existingItems.filter(item => item.id !== payload.id);
        localStorage.setItem('product', JSON.stringify(updatedItems));
        state.cartItems = updatedItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('product');
    },

    // list reducers
    addToList: (state, { payload }) => {
      const existingItems = state.listItems;
      const updatedItems = [...existingItems, payload];
      localStorage.setItem('listItems', JSON.stringify(updatedItems));
      state.listItems = updatedItems;
    },
    deleteFromList: (state, { payload }) => {
        const existingItems = state.listItems;
        const updatedItems = existingItems.filter(item => item.id !== payload.id);
        localStorage.setItem('listItems', JSON.stringify(updatedItems));
        state.listItems = updatedItems;
    },


  },
});

export const { addToCart, deleteFromCart, clearCart , addToList , deleteFromList} = CartSlice.actions;

export default CartSlice.reducer;
