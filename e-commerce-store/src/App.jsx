import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddressForm from "./components/AddressForm";
import AddCardForm from "./components/addCardForm";
import SelectCard from "./components/selectCard";
import CartSummary from "./components/CartSummary";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="flex bg-gray-200">

              {/* Sidebar */}
              <Sidebar />

              {/* Main Content */}
              <div className="flex-1 p-4">
                <div className="flex justify-center mb-2.5">
                  <Navbar />
                </div>

                {/* Product Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                  <ProductCard />
                </div>
              </div>

              {/* Cart Summary (only md & lg) */}
              <div className="border-l-2 border-gray-300 gap-4 p-4 top-[51px] sm:hidden md:block lg:block">
                <div className="w-[250px] h-10">
                  <CartSummary />
                </div>
              </div>
            </div>
          }
        />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

      </Routes>

      {/* Forms rendered globally */}
      <div>
        <SelectCard />
        <AddCardForm />
      </div>

      <AddressForm />
    </Router>
  );
};

export default App;
