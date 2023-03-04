import { createSlice } from "@reduxjs/toolkit";

const lengRedusers = createSlice({
    name : "lengRedusers" , 
    initialState : {dir : localStorage.getItem("dir") != null ? localStorage.getItem("dir") : "ltr" , lang : localStorage.getItem("lengActive") != null ? localStorage.getItem("lengActive") : "en" }, 
    reducers : {
        getactiveLeng : (state) => {
            if(localStorage.getItem("lengActive")) {
                state.dir = localStorage.getItem("dir") ; 
                state.lang = localStorage.getItem("lengActive") ; 
            }
        }
    }
})


export const { getactiveLeng } = lengRedusers.actions
export default lengRedusers.reducer ; 
