import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart",
    initialState : {
        items : [],
        
    },
    reducers : {
        addProductToCart : (state, {payload}) => {
            state.items.push(payload)
        }
    }

})

export const {addProductToCart} = CartSlice.actions;

export default CartSlice.reducer