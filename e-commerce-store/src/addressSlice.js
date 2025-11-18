// src/redux/addressSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingName: "",
  streetName: "",
  city: "",
  state: "",
  country: "",
  isDefault: false,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    saveAddress: (state) => {
      console.log("Address saved:", state);
      // You can also send to backend here
    },
  },
});

export const { updateField, saveAddress } = addressSlice.actions;
export default addressSlice.reducer;
