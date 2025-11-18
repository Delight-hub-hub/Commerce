// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./addressSlice";
import paymentReducer from './paymentSlice'
import cartReducer from './store/cartSlice'

export const store = configureStore({
  reducer: {
    address: addressReducer,
    payment: paymentReducer,
    cart: cartReducer,
  },

});
