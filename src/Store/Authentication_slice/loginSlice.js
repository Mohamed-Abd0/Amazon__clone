import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"Authentication",
    initialState:{
        islogin: !!localStorage.getItem('token'),
    },
    reducers:{
        login: (state , {payload})=>{
            localStorage.setItem('token' , payload.accessToken)
            localStorage.setItem('uid',payload.uid)
            state.islogin = true
        },
        logout: (state)=>{
            localStorage.removeItem('token')
            localStorage.removeItem('uid')
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            state.islogin = false
        },
        autoLogout: (state , payload)=>{
            // logic for auto logout 
        }
    }
})


export const { login , logout , autoLogout } = loginSlice.actions;
export default loginSlice.reducer