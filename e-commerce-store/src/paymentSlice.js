// src/redux/paymentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardholderName: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
  isDefault: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    saveCard: (state) => {
      console.log("Card Saved:", state);
      // send to backend if needed
    },
  },
});

export const { updateField, saveCard } = paymentSlice.actions;
export default paymentSlice.reducer;
