import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Section */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTER
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-180" : ""
            }`}
            src={assets.dropdown_icon}
            alt="toggle filter"
          />
        </p>

        {/* Categories */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              Men
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              Women
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              Kids
            </label>
          </div>
        </div>

        {/* Types */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              Topwear
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              Bottomwear
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <p className="text-gray-600">Total Products: {products.length}</p>
      </div>
    </div>
  );
};

export default Collection;
