// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const LOCAL_KEY = "my_ecom_cart_v1";

function loadFromLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function saveToLocal(state) {
  try {
    const payload = {
      items: state.cart.items,
    };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(payload));
  } catch {
    // ignore write errors
  }
}

const preloaded = loadFromLocal();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: preloaded ? { cart: preloaded } : undefined,
  devTools: true,
});

store.subscribe(() => {
  saveToLocal(store.getState());
});
