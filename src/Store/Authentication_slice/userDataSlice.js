import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    name: localStorage.getItem('name')? localStorage.getItem('name') : 'singin',
    email: localStorage.getItem('name')? localStorage.getItem('email') : null,
  },
  reducers: {
    setUserData: (state, action) => {
      localStorage.setItem('name', action.payload.name)
      localStorage.setItem('email', action.payload.email)
      
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUserData } = userDataSlice.actions;


export default userDataSlice.reducer;