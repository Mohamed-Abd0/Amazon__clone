import { createSlice } from "@reduxjs/toolkit";

const PaymentSlice = createSlice({
  name: "payment",
  initialState: {
    country: "",
    name: "",
    phone: "",
    street: "",
    build: "",
    city: "",
    district: "",
    governorate: "",
    landmark: "",
  },
  reducers: {
    addCountry: (state, action) => {
      state.name = action.payload;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    addPhone: (state, action) => {
      state.phone = action.payload;
    },
    addStreet: (state, action) => {
      state.name = action.payload;
    },
    addBuild: (state, action) => {
      state.city = action.payload;
    },
    addCity: (state, action) => {
      state.name = action.payload;
    },
    addDistrict: (state, action) => {
      state.district = action.payload;
    },
    addGovernorate: (state, action) => {
      state.name = action.payload;
    },
    addLandmark: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {
  addCountry,
  addName,
  addPhone,
  addStreet,
  addBuild,
  addCity,
  addDistrict,
  addGovernorate,
  addLandmark,
} = PaymentSlice.actions;

export default PaymentSlice.reducer;
