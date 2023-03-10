import { createSlice } from "@reduxjs/toolkit";

const cartItemNumber = createSlice({
    initialState : 0 , 
    name : "cartItemNumber" , 
    reducers : {
        incrementCartItem : (state) => {
            return state = state + 1 ;
        }
    }
})

export const { incrementCartItem } = cartItemNumber.actions
export default cartItemNumber.reducer ; 
