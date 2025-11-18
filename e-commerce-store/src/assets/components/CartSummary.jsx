import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../store/cartSlice";
import { FaLock } from "react-icons/fa";

// Import product images
import Laptop from "../assets/Laptop.png";
import Iphone14 from "../assets/Iphone14mini.png";
import Iphone11 from "../assets/Iphone11mini.png";
import Iphone11mini from "../assets/Iphone11mini-black.png";
import CTA from "../assets/CTA.png";



export default function Products() {
//Opened Array for the products in the cart summary
  const product = [
    {
      image: Laptop,
      name: "Laptop",
    },
    {
      image: Iphone14,
      name: "Iphone 14",
  
    },
    {
      image: Iphone11,
      name: "Iphone 11",
  
    },
    {
      image: Iphone11mini,
      name: "Iphone 11",

    },
    
  ];

  const location = useLocation();
  const total = useSelector(selectCartTotalPrice) || 0;

  return (
  <section className="w-full">
    {/*Centered the heading of the cart */}
    <h1 className="text-lg md:text-xl text-black font-bold mb-4 flex justify-center">
      Bag
    </h1>
    
    {/* Grid layout for cart products */}
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-4 gap-4">
      {product.map((product, index) => (
        <div key={index} className="w-[56px] h-[56px]">
          <img src={product.image} alt={product.name} className="bg-white mini-cart object-contain p-1 rounded" />
        </div>
      ))}
        </div>


    {/* Bag total (only show when on /cart) and CTA */}
        <div className="mt-6 flex flex-col items-center gap-3">
          {location.pathname === "/cart" && (
            <div className="text-center">
              <div className="text-sm text-gray-500">Bag Total</div>
              <div className="text-lg font-bold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(total))}</div>
            </div>
          )}

          <div className="flex justify-center mt-2 md:mt-4">
            {location.pathname === "/cart" ? (
              <Link to="/checkout" className="inline-block">
                <button className="bg-black text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2">
                  <FaLock className="w-4 h-4" />
                  <span>Checkout</span>
                </button>
              </Link>
            ) : (
              <Link to="/cart">
                <img src={CTA} alt="cart" className="CTA cursor-pointer" />
              </Link>
            )}
          </div>
        </div>
    </section>
);
}