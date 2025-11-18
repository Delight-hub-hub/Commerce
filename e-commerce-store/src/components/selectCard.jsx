// src/components/SelectCard.jsx
import React from "react";

const SelectCard = ({ cards = [], onSelect }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold tracking-wider mb-4">
        SELECT A CARD
      </h2>

      <div className="space-y-3">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => onSelect(card)}
            className="w-full flex items-center gap-3 text-left p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <span className="text-gray-700">💳</span>
            <span className="text-gray-700">
              {card.type} ending in {card.last4}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCard;
