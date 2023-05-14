import { createSelector, createSlice } from "@reduxjs/toolkit";

const storedCartItems = localStorage.getItem("cartItems");
const storedSavedItems = localStorage.getItem("savedItems");

const initialState = {
  cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
  savedItems: storedSavedItems ? JSON.parse(storedSavedItems) : [],
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // cartItems reducer
    addToCart: (state, { payload }) => {
      // add Qty to cart items
      const newCartItem = { ...payload, qty: 1 };

      const existingItems = state.cartItems;
      const updatedItems = [...existingItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      state.cartItems = updatedItems;

      // update the total price
      let subTotal = 0;
      updatedItems.forEach((product) => {
        subTotal += product.price * product.qty;
      });

      state.totalPrice = subTotal;
    },
    deleteFromCart: (state, { payload }) => {
      const existingItems = state.cartItems;
      const updatedItems = existingItems.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      state.cartItems = updatedItems;

      // update the total price
      let subTotal = 0;
      updatedItems.forEach((product) => {
        subTotal += product.price * product.qty;
      });

      state.totalPrice = subTotal;
    },
    updatecartItemQty: (state, { payload }) => {
      const existingItems = state.cartItems;

      // add the updated porduct to the cart items
      const updatedItems = existingItems.map((item) => {
        if (item.id === payload.id) {
          return payload;
        } else {
          return item;
        }
      });

      // store the updateditems in localstorage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));

      // update the cartItems state
      state.cartItems = updatedItems;

      // update the total price
      let subTotal = 0;
      updatedItems.forEach((product) => {
        subTotal += product.price * product.qty;
      });

      state.totalPrice = subTotal;
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      state.cartItems = [];
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
  updatecartItemQty,
  addToSavedItems,
  deleteFromSavedItems,
} = CartSlice.actions;

export default CartSlice.reducer;

// Selector for cartItems state
export const selectCartItems = createSelector(
  (state) => state.CartSlice.cartItems,
  (cartItems) => cartItems
);
