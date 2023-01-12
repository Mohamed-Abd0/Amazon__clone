import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name : "Modal",
    initialState : {
        overlayState : false
    },
    reducers : {
        overlayfunc : (state, {payload}) => {
            state.overlayState = payload
        }
    }
})

export const {overlayfunc} = ModalSlice.actions;

export default ModalSlice.reducer