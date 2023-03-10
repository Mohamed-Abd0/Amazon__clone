import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "Modal",
  initialState: {
    overlayState: false,
    cartMenuSectionState: false,
    summarySectionState: false,
    productOptionsState: false,
  },
  reducers: {
    allModalsState: (state, { payload }) => {
      for (const key in state) state[key] = payload;
    },
    floatingIconFunc: (state, { payload }) => {
      state[`${payload.action}`] = !state[`${payload.action}`];
      state.overlayState = payload.overlay;
    },
  },
});

export const { allModalsState, floatingIconFunc } = ModalSlice.actions;

export default ModalSlice.reducer;
