import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  name: "",
  address: "",
  city: "",
  country: "",
  zip: "",
  nameOnCard: "",
  expiryDate: "",
  cardNumber: "",
  cvv: "",
};
  

const shippingSlice = createSlice({
    name: "chechout",
    initialState,
    reducers: {
        setShippingData: (state, action) => {
            const { name, address, city, country, zip } = action.payload
            state.name = name;
            state.address = address;
            state.city = city;
            state.country = country;
            state.zip = zip;
        },
        setPaymentData: (state, action) => {
            const { nameOnCard, expiryDate, cardNumber, cvv } = action.payload;
            state.nameOnCard = nameOnCard;
            state.expiryDate = expiryDate;
            state.cardNumber = cardNumber;
            state.cvv = cvv;
        },
    },
});
 


export const { setShippingData, setPaymentData } = shippingSlice.actions;

export default shippingSlice.reducer;