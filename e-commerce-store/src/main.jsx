import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import AddressForm from "./AddressForm";
import "./index.css";
import AddCardForm from "./addCardForm";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    <AddressForm />
    <AddCardForm/>

  </Provider>
  </React.StrictMode>
  
);
