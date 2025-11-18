import React from 'react';
import Rating from '../assets/Rating.svg';
import Bag from '../assets/BagCTA.svg';
import { ChevronLeft } from 'lucide-react';
import Sidebar from './Sidebar';
import CartSummary from './CartSummary';
import { Link, useLocation } from "react-router-dom";

function ProductDetail() {

  const { state } = useLocation();
  const product = state?.product;

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gray-200">

      {/* Sidebar hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 px-4 sm:px-6 md:px-10 py-6">

        {/* Back button */}
        <div className="flex items-center gap-2 text-gray-700 cursor-pointer mb-6">
          <ChevronLeft size={20} />
          <Link to="/">
            <p className="text-sm font-medium">Back</p>
          </Link>
        </div>

        {/* Main content container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10">

          {/* Images */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* Mini images */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-4 justify-center md:justify-start">
              {[1,2,3].map((i) => (
                <div key={i} className="w-[50px] h-[60px] md:w-[60px] md:h-[70px] p-2 bg-white rounded-md shadow-sm flex items-center justify-center shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Main image */}
            <div className="flex items-center justify-center md:justify-center w-full md:w-auto rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-[220px] h-[260px] sm:w-[260px] sm:h-[300px] md:w-[218px] md:h-[218px] object-contain"
              />
            </div>

          </div>

          {/* Product info */}
          <div className="flex flex-col justify-between flex-1">

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">{product.name}</h2>
              <p className="text-base md:text-lg text-gray-600 mt-1">{product.modal}</p>
              <p className="text-lg md:text-xl font-bold text-black mt-4">{product.price}</p>

              {/* Rating */}
              <p className="text-green-900 font-medium flex items-center">
                <img src={Rating} alt="Rating" className="mt-2" />
                4.5/5
              </p>

              {/* Short description */}
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Add to bag */}
            <div className="w-full max-w-[260px] mt-6 md:mt-8">
              <img src={Bag} alt="Add to Bag" className="object-contain w-full" />
            </div>

          </div>

        </div>

        {/* Long Description Section */}
        <div className="border-t border-gray-300 pt-6">
          <h1 className="text-lg font-semibold mb-4">Description</h1>
          
          <p className="text-sm text-gray-600 leading-relaxed max-h-[300px] overflow-y-auto pr-2">
            {product.longDescription}
          </p>
        </div>

      </div>

      {/* Cart summary only visible on desktop */}
      <aside className="hidden md:block ml-20 w-[300px] border-l p-6">
        <CartSummary />
      </aside>

    </section>
  );
}

export default ProductDetail;
