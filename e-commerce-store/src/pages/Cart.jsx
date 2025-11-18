// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems, selectCartTotalPrice, increaseQty, decreaseQty } from "../store/cartSlice";
import { FaStar } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import CartSummary from "../components/CartSummary";

export default function Cart() {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleIncrease = (id) => {
        dispatch(increaseQty(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQty(id));
    };

    const handleCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="flex bg-gray-200 min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-8">Check your Bag Items</h1>

                {/* Cart Items */}
                <div className="space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500 py-12">
                            Your bag is empty
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-sm p-8 flex items-start gap-8"
                            >
                                {/* Product Image */}
                                <div className="w-36 h-36 shrink-0 bg-gray-50 rounded-xl p-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                                    <p className="text-gray-500 text-sm mb-3">{item.color}</p>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`${i < Math.floor(item.rating || 4.5)
                                                        ? "text-teal-500"
                                                        : "text-gray-300"
                                                        }`}
                                                    size={16}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700">{item.rating || 4.5} / 5</span>
                                    </div>

                                    {/* Price and Quantity */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold">
                                                $ {item.price}
                                            </span>
                                            <span className="text-gray-500 font-medium">x {item.qty}</span>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-5">
                                            <button
                                                onClick={() => handleDecrease(item.id)}
                                                className="text-red-500 hover:text-red-600 text-2xl font-light w-8 h-8 flex items-center justify-center"
                                            >
                                                −
                                            </button>
                                            <span className="text-lg font-semibold w-8 text-center">
                                                {item.qty}
                                            </span>
                                            <button
                                                onClick={() => handleIncrease(item.id)}
                                                className="text-green-500 hover:text-green-600 text-2xl font-light w-8 h-8 flex items-center justify-center"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Right Sidebar - Bag Summary */}
            <div className="border-l-4 top-border-l-2 border-gray-300 gap-4 p-4 top-[51px] sm:hidden md:block lg:block">
                <div className="w-[250px] h-10">
                    <CartSummary />
                </div>
            </div>
        </div>
    );
}
