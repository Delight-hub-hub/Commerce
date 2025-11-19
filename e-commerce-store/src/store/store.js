// src/store/store.js (final merged version)

import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./addressSlice";
import paymentReducer from "./paymentSlice";
import cartReducer from "./cartSlice";

// --- LocalStorage Setup (Cart Only) ---
const LOCAL_KEY = "my_ecom_cart_v1";

function loadFromLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw); // { items: [...] }
  } catch {
    return undefined;
  }
}

function saveToLocal(state) {
  try {
    localStorage.setItem(
      LOCAL_KEY,
      JSON.stringify({
        items: state.cart.items,
      })
    );
  } catch {
    // Ignore write errors silently
  }
}

const preloaded = loadFromLocal();

// --- Unified Redux Store ---
export const store = configureStore({
  reducer: {
    address: addressReducer,
    payment: paymentReducer,
    cart: cartReducer,
  },
  preloadedState: preloaded ? { cart: preloaded } : undefined,
  devTools: true,
});

// --- Sync Cart to LocalStorage ---
store.subscribe(() => {
  saveToLocal(store.getState());
});
