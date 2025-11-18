import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
<<<<<<< HEAD
=======
import AddressForm from "./AddressForm";
>>>>>>> 84d89e26d15e8913a10f1aa2118a15153aa4470c
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>

  </Provider>
  </React.StrictMode>
  
);
