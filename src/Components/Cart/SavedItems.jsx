import React from "react";

const SavedItems = () => {
  return (
    <div className="m-4 p-4">
      <div>
        <h2 className="font-bold text-xl">Your items</h2>
        <ul className="flex space-x-6 mt-2">
          <li className="font-bold">Saved for later (2 items)</li>
        </ul>
        <div className="h-px w-full bg-gray-500 my-4"></div>
        {/* items */}
        <div className="flex flex-row flex-wrap gap-4">
          {/* item 1 */}
          <div className="border rounded p-6 w-64">
            <div className="flex items-center space-x-4">
              <img
                width={220}
                height={220}
                src="https://m.media-amazon.com/images/G/42/cart/empty/kettle-desaturated._CB659190457_.svg"
                alt=""
              />
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <p className="text-sm font-semibold origin-center  overflow-hidden text-ellipsis whitespace-nowrap">
                Razer Viper V2 Pro HyperSpeed Wireless Gaming Mouse: 58g
                Ultra-Lightweight - Optical Switches Gen-3 - 30K Optical Sensor
                - On-Mouse DPI Controls - 80hr Battery - USB Type C Cable
                Included - Black
              </p>
              <span className="font-bold">EGP 42.00</span>
              <span className=" text-xs text-[#007600]">In stock</span>
              <span className="text-xs text-[#565959]">
                Eligible for FREE delivery
              </span>
              <button className="border rounded shadow-md p-2">
                Move to cart
              </button>
              <ul className="space-y-2">
                <li className="text-[#007185] cursor-pointer">Delete</li>
                <li className="text-[#007185] cursor-pointer">Add to list</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SavedItems;
