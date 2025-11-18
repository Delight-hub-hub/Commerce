import React from 'react'
import AddressForm from './AddressForm'
import AddCardForm from './addCardForm'
import SelectCard from './selectCard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import CartSummary from "./components/CartSummary";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


const App =()=>{
  return(
    <>
     <Router>
            <Routes>
                {/* HOME PAGE */}
                <Route
                    path="/"
                    element={
                        <div className="flex bg-gray-200">
                            {/* Sidebar */}
                            <Sidebar />


                            {/* Main content */}
                            <div className="flex-1 p-4">
                                <div className="flex justify-center mb-2.5">
                                    <Navbar />
                                </div>


                                {/* Product grid */}
                                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                                    <ProductCard />
                                </div>
                            </div>


                            {/* Cart summary visible only on md & lg */}
                            <div className="border-l-2 border-gray-300 gap-4 p-4 top-[51px] sm:hidden md:block lg:block">
                                <div className="w-[250px] h-10">
                                    <CartSummary />
                                </div>
                            </div>
                        </div>
                    }
                />


                {/*Product Details Page */}
                <Route path="/product/:id" element={<ProductDetail />} />

                {/* Cart/Bag Page */}
                <Route path="/cart" element={<Cart />} />

                {/* Checkout Page */}
                <Route path="/checkout" element={<Checkout />} />

                {/* Payment / Address Pages */}
                <Route path="/add-card" element={<AddCardForm />} />
                <Route path="/address" element={<AddressForm />} />

            </Routes>
        </Router>
                {/* SelectCard removed: it caused a persistent 'SELECT A CARD' panel on all pages */}

    </>
  )
}
export default App