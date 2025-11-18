// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems, selectCartTotalPrice } from "../store/cartSlice";
import { FaStar, FaCreditCard, FaGift } from "react-icons/fa";

export default function Checkout() {
    const cartItems = useSelector(selectCartItems);
    const subtotal = useSelector(selectCartTotalPrice);
    const navigate = useNavigate();

    const shipping = 6.99;
    const gst = 760.41;
    const giftCard = 0.00;
    const orderTotal = subtotal + shipping + gst - giftCard;

    const [shippingAddress, setShippingAddress] = useState({
        name: "John Maker",
        street: "123 Pläe Gïond Stret",
        city: "Vermont, California",
        country: "United States of America"
    });

    const [paymentMethod, setPaymentMethod] = useState({
        type: "Mastercard",
        lastFour: "1252",
        giftCardBalance: 53.21,
        sameBillingAddress: true
    });

    const handleBack = () => {
        navigate("/cart");
    };

    const handlePlaceOrder = () => {
        alert("Order placed successfully!");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Left Column - Shipping & Payment */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        {/* Shipping Address */}
                        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
                                <h2 className="text-lg sm:text-xl font-bold tracking-wider">SHIPPING ADDRESS</h2>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 self-start sm:self-auto">
                                    Change
                                </button>
                            </div>
                            <div className="text-gray-700 space-y-1 text-sm sm:text-base">
                                <p className="font-medium">{shippingAddress.name}</p>
                                <p>{shippingAddress.street}</p>
                                <p>{shippingAddress.city}</p>
                                <p>{shippingAddress.country}</p>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
                                <h2 className="text-lg sm:text-xl font-bold tracking-wider">PAYMENT METHOD</h2>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 self-start sm:self-auto">
                                    Change
                                </button>
                            </div>
                            <div className="space-y-3 text-sm sm:text-base">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <FaCreditCard className="text-gray-600 shrink-0" size={20} />
                                    <span className="text-gray-700">
                                        {paymentMethod.type} ending in {paymentMethod.lastFour}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <FaGift className="text-gray-600 shrink-0" size={20} />
                                    <span className="text-gray-700">
                                        $ {paymentMethod.giftCardBalance.toFixed(2)} gift card balance
                                    </span>
                                </div>
                                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                                    <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Billing address same as Shipping Address</span>
                                </div>
                            </div>
                        </div>

                        {/* Review Your Bag */}
                        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-bold tracking-wider mb-4 sm:mb-6">REVIEW YOUR BAG</h2>
                            <div className="space-y-4 sm:space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-gray-200 last:border-b-0">
                                        {/* Product Image */}
                                        <div className="w-full sm:w-32 h-40 sm:h-32 shrink-0 bg-gray-50 rounded-lg p-2">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <h3 className="text-base sm:text-lg font-bold mb-1">{item.title}</h3>
                                            <p className="text-gray-500 text-xs sm:text-sm mb-2">{item.color}</p>
                                            <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{item.description}</p>

                                            {/* Rating */}
                                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={`${i < Math.floor(item.rating || 4.5)
                                                                ? "text-green-500"
                                                                : "text-gray-300"
                                                                }`}
                                                            size={12}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs sm:text-sm font-medium">{item.rating || 4.5} / 5</span>
                                            </div>

                                            {/* Price and Quantity */}
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-base sm:text-lg font-semibold">
                                                        $ {item.price}
                                                    </span>
                                                    <span className="text-sm sm:text-base text-gray-500">x {item.qty}</span>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-gray-300 hover:bg-gray-100 text-base sm:text-lg font-bold">
                                                        -
                                                    </button>
                                                    <span className="text-base sm:text-lg font-medium w-6 sm:w-8 text-center">
                                                        {item.qty}
                                                    </span>
                                                    <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-gray-300 hover:bg-gray-100 text-base sm:text-lg font-bold">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow p-4 sm:p-6 lg:sticky lg:top-8">
                            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Order Summary</h2>

                            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-sm sm:text-base">
                                <div className="flex justify-between text-gray-700">
                                    <span>Items:</span>
                                    <span>$ {subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Shipping:</span>
                                    <span>$ {shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Estimated GST:</span>
                                    <span>$ {gst.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Gift Card:</span>
                                    <span>$ {giftCard.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="border-t pt-3 sm:pt-4 mb-4 sm:mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-base sm:text-lg">Order Total:</span>
                                    <span className="font-bold text-red-600 text-lg sm:text-xl">
                                        $ {orderTotal.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <button
                                onClick={handlePlaceOrder}
                                className="w-full bg-black text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 transition mb-3 sm:mb-4"
                            >
                                Place your order
                            </button>

                            {/* Back Button */}
                            <button
                                onClick={handleBack}
                                className="w-full bg-white border border-gray-300 text-gray-700 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
                            >
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
