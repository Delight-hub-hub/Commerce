import React from "react";
import { Link } from "react-router-dom";

// Import product images
import watch from "../assets/Apple-watch.png";
import Headphones from "../assets/Headphones.png";
import Blackiphone11 from "../assets/Black-iphone11.png";
import Blueiphone11 from "../assets/Blue-iphone11.png";
import Rediphone11 from "../assets/Red-iphone11.png";
import Whiteiphone11 from "../assets/White-iphone11.png";
import Iphone13 from "../assets/iPhone13.png";
import Iphone14 from "../assets/iPhone14.png";
import Button from "../assets/Button.png";

export default function Products() {
  const product = [
    {
      image: watch,
      name: "Apple Watch",
      modal: "Series 5 SE",
      price: "$ 529,99",
      Bag: Button,
      shortDescription: "Lightweight apple watch, sleek, and built for everyday fitness and notifications.",
      longDescription:
    "The Apple Watch Series 5 SE delivers seamless performance with its always-on Retina display, advanced fitness tracking, heart rate monitoring, and customizable bands. Designed for comfort and productivity, it supports GPS, emergency SOS, and integrates perfectly with your Apple ecosystem. Whether you're running, training, or staying connected on the go, it offers reliable battery life and a premium feel."
    },
    {
      image: Headphones,
      name: "Sony ZX330BT",
      modal: "Light Grey",
      price: "$ 39,99",
      Bag: Button,
      shortDescription: "Wireless, lightweight, and built for crisp everyday listening with long-lasting battery life.",
      longDescription: 
      "The Sony ZX330BT delivers smooth wireless audio with a comfortable on-ear design perfect for daily use. Its Bluetooth connectivity keeps you free from cables, while the extended battery life ensures hours of uninterrupted playback. Soft ear cushions, balanced sound tuning, and a foldable design make it an easy go-to for commuting, studying, gym sessions, or casual chilling. Reliable, durable, and effortlessly portable,your steady audio partner."
    },
    {
      image: Blackiphone11,
      name: "Iphone 11",
      modal: "Series Black",
      price: "$ 619,99",
      Bag: Button,
      shortDescription: "A bold, clean finish paired with fast performance and a sharp dual-camera system.",
      longDescription: 
      "The iPhone 11 in Serious Black showcases Apple’s signature blend of power and elegance. Equipped with the A13 Bionic chip, a 6.1-inch Liquid Retina display, and a dual 12MP camera system, it delivers smooth performance and stunning photos in every lighting condition. Its tough glass, long battery life, and water-resistant design make it a practical daily driver wrapped in a premium matte look. Reliable. Sleek. Distinctly timeless.",
    },
    {
      image: Blueiphone11,
      name: "Iphone 11",
      modal: "Subway Blue",
      price: "$ 619,99",
      Bag: Button,
      shortDescription: "Vibrant and stylish with powerful performance and a smooth, immersive display.",
      longDescription: "The iPhone 11 Subway Blue edition combines standout color with high-grade capability. Powered by the A13 Bionic chip, it handles apps, multitasking, and gaming with ease. Its dual 12MP cameras capture detailed photos and stable videos, while Night Mode brings clarity to low-light shots. The 6.1-inch Liquid Retina display offers accurate color reproduction and a comfortable viewing experience. A bold choice for users who like their tech both striking and dependable.",
    },
    {
      image: Rediphone11,
      name: "Iphone 11",
      modal: "Product Red",
      price: "$ 619,99",
      Bag: Button,
    },
    {
      image: Whiteiphone11,
      name: "Iphone 11",
      modal: "Milky White",
      price: "$ 619,99",
      Bag: Button,
    },
    {
      image: Iphone13,
      name: "Iphone 13",
      modal: "Product Red",
      price: "$ 529,99",
      Bag: Button,
    },
    {
      image: Iphone14,
      name: "Iphone 14",
      modal: "Product Red",
      price: "$ 619,99",
      Bag: Button,
    }
  ];

  return (
    <>
      {product.map((product, index) => (
        <div 
          key={index}
          className="flex flex-col items-center rounded-2xl p-4
                     w-full max-w-[220px] h-auto mx-auto"
        >

          {/* MAIN CARD CLICK AREA */}
          <Link 
            to={`/product/${index}`} 
            state={{ product }}
            className="w-full"
          >
            {/* Product image */}
            <img
              src={product.image}
              alt={product.name}
              className="bg-white rounded-[22px] p-4 w-full h-[200px] object-contain"
            />

            {/* Product details */}
            <div className="flex flex-col w-full p-2 gap-2">
              <h1 className="product-name">{product.name}</h1>
              <h2 className="text-sm text-description">{product.modal}</h2>
            </div>
          </Link>

          {/* PRICE + BAG */}
          <div className="flex items-center justify-between w-full px-2">
            <p className="product-name">{product.price}</p>

            {/* Bag links to cart */}
            <Link to="/Home">
              <img 
                src={product.Bag} 
                alt="checkout-bag" 
                className="w-6 h-6 ml-cursor-pointer"
              />
            </Link>
          </div>

        </div>
      ))}
    </>
  );
}
