// src/components/AddCardForm.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, saveCard } from "./paymentSlice";

const AddCardForm = () => {
  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveCard());
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold tracking-wide mb-6">
        ADD A NEW CARD
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Cardholder Name */}
        <div>
          <label className="text-gray-600">Cardholder Name</label>
          <input
            type="text"
            placeholder="John Maker"
            value={payment.cardholderName}
            onChange={(e) => handleChange("cardholderName", e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
        </div>

        {/* Card Number */}
        <div>
          <label className="text-gray-600">Card Number</label>
          <div className="relative">
            <span className="absolute left-3 top-3 opacity-60">💳</span>
            <input
              type="text"
              placeholder="5126-5987-2214-7621"
              value={payment.cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none"
            />
          </div>
        </div>

        {/* Expiry + CVC */}
        <div className="flex gap-3">
          <div className="w-1/2">
            <label className="text-gray-600">Expiry Date</label>
            <div className="relative">
              <span className="absolute left-3 top-3 opacity-60">📅</span>
              <input
                type="text"
                placeholder="MM / YYYY"
                value={payment.expiry}
                onChange={(e) => handleChange("expiry", e.target.value)}
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none"
              />
            </div>
          </div>

          <div className="w-1/2">
            <label className="text-gray-600">CVC</label>
            <input
              type="text"
              placeholder="123"
              value={payment.cvc}
              onChange={(e) => handleChange("cvc", e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
          </div>
        </div>

        {/* Default checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={payment.isDefault}
            onChange={(e) => handleChange("isDefault", e.target.checked)}
            className="cursor-pointer"
          />
          <span className="text-gray-700">Save this as your default payment method</span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900 flex items-center justify-center gap-2"
        >
          💳 Add Payment Method
        </button>

        <p className="text-center text-green-500 text-sm mt-2">
          🔒 Secure Connection
        </p>

        <button className="text-sm text-gray-600 hover:underline">
          Back
        </button>
      </form>
    </div>
  );
};

export default AddCardForm;
