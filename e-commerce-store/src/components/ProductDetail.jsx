import React from 'react';
import Rating from '../assets/Rating.svg';
import Bag from '../assets/BagCTA.svg';
import { ChevronLeft } from 'lucide-react';
import Sidebar from './Sidebar';
import CartSummary from './CartSummary';
import { Link, useLocation } from "react-router-dom";

function ProductDetail() {

  // Receive product from navigation state
  const { state } = useLocation();
  const product = state?.product;

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gray-200">
      <Sidebar />

      <div className="flex flex-col flex-1 px-4 sm:px-6 md:px-10 py-6 md:ml-0">

        {/* Back navigation */}
        <div className="flex items-center gap-2 text-gray-700 cursor-pointer mb-6">
          <ChevronLeft size={20} />
          <Link to="/">
            <p className="text-sm font-medium">Back</p>
          </Link>
        </div>

        <div className="flex gap-6 flex-col md:flex-row md:gap-8 0 mb-10">
          <div className="flex gap-4 md:gap-6">

            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-4">
              <div className="w-[50px] h-[60px] p-2 bg-white rounded-md shadow-sm md:w-[60px] md:h-[70px] flex items-center justify-center shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Image */}
            <div className="flex items-center justify-center rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-[258px] h-[318px] md:w-[218px] md:h-[218px] object-contain"
              />
            </div>

          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">{product.name}</h2>
              <p className="text-base md:text-lg text-gray-600 mt-1">{product.modal}</p>
              <p className="text-lg md:text-xl font-bold text-black mt-4">{product.price}</p>

              <p className="text-green-900 font-medium flex items-center">
                <img src={Rating} alt="Rating" className="mt-2" />
                4.5/5
              </p>

              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>

            <div className="w-full max-w-[258px] mt-6">
              <img src={Bag} alt="Add to Bag" className="object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <h1 className="text-lg font-semibold mb-4">Description</h1>
          <p className="text-sm text-gray-600 leading-relaxed max-h-[300px] overflow-y-auto pr-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>

      </div>

      <aside className="hidden md:block ml-20 w-[300px] border-l p-6">
        <CartSummary />
      </aside>
    </section>
  );
}

export default ProductDetail;
