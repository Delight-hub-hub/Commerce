//components folder to be created and all pages put on that folder
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, saveAddress } from "../store/addressSlice";
import {Link} from "react-router-dom";


const AddressForm = () => {
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveAddress());
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="text-gray-600">Shipping Name</label>
          <input
            type="text"
            placeholder="John Maker"
            value={address.shippingName}
            onChange={(e) => handleChange("shippingName", e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-600">Street Name</label>
          <input
            type="text"
            placeholder="123 Plae Grond Street"
            value={address.streetName}
            onChange={(e) => handleChange("streetName", e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-600">City</label>
          <input
            type="text"
            placeholder="Vermont"
            value={address.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-600">State / Province</label>
          <input
            type="text"
            placeholder="California"
            value={address.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-600">Country</label>
          <input
            type="text"
            placeholder="United States of America"
            value={address.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={address.isDefault}
            onChange={(e) => handleChange("isDefault", e.target.checked)}
          />
          <span className="text-gray-700">Save this as your default address</span>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900"
        >
          Add Address
        </button>
        <div classsName="flex flex-col ">
          <div className="flex">
            <Link to="/checkout">
            <p className="flex justify-start">Back</p>
            </Link>
            
          </div>
          <div className="flex justify-end text-green-500 text-sm ml-70">
             
          🔒 Secure Connection
      
          </div>
       
        </div>
       
      </form>
    </div>
  );
};

export default AddressForm;
