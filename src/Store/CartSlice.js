import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart",
    initialState : {
        items : [],
        
    },
    reducers : {
        addToCart : (state, {payload}) => {
            state.items.push(payload)
        }
    }

})

export const {addToCart} = CartSlice.actions;

export default CartSlice.reducer

 

 
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload
//       const existingItem = state.items.find(i => i.id === item.id)
//       if (existingItem) {
//         existingItem.quantity++
//       } else {
//         state.items.push({ ...item, quantity: 1 })
//       }
//     },
//     removeFromCart: (state, action) => {
//       const id = action.payload
//       state.items = state.items.filter(i => i.id !== id)
//     },
//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload
//       const item = state.items.find(i => i.id === id)
//       if (item) {
//         item.quantity = quantity
//       }
//     },
//     clearCart: (state) => {
//       state.items = []
//     }
//   } 

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
// export default cartSlice.reducer
