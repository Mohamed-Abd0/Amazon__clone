import { createSelector, createSlice } from "@reduxjs/toolkit";

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
      const existingItems = state.cartItems.find(item => item.id === payload.id);
      if (existingItems){
        state.totalQty += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        const updatedItems = [...state.cartItems, {...payload, qty: 1}];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        state.cartItems = updatedItems;
      } 
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
    incrementQty: (state, { payload }) => {
      const existingItem = state.cartItems.find(item => item.id === payload.id);

      if (existingItem) {
        existingItem.qty += payload.qty;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        state.totalQty += payload.qty;
      }
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
  incrementQty,
  addToSavedItems,
  deleteFromSavedItems,
} = CartSlice.actions;

export default CartSlice.reducer;


// Selector for cartItems state
export const selectCartItems = createSelector(
  state => state.CartSlice.cartItems,
  cartItems => cartItems
);