import React from "react";
import { Link } from "react-router-dom";

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

  return (
  <section className="w-full">
    {/*Centered the heading of the cart */}
    <h1 className="text-lg md:text-xl text-black font-bold mb-4 flex justify-center">
      Bag
    </h1>
    
    {/* Grid layout for cart products */}
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-4 gap-4">
      {product.map((product, index) => (
      <div key={index} className="w-[300px] h-[90px]">
        {/* Product image */}
        <img src={product.image} alt={product.name} className="bg-white mini-cart object-contain flex-wrap gap-4"/>
        </div>
    ))}
        </div>


    {/*Centered CTA button wrapped in Link for navigation*/}
        <div className="flex justify-center mt-4 md:mt-6">
          <Link to="/checkout">
            <img src={CTA} alt="cta-image" className="CTA cursor-pointer" />
            </Link>
        </div>
    </section>
);
}