import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import AddressForm from "./AddressForm";
import "./index.css";
import AddCardForm from "./addCardForm";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AddressForm />
    <AddCardForm/>

  </Provider>
);
