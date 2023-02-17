import React, { useState } from "react";

function CartItems() {
  return (
    <div className="bg-[#EAEDED] relative overflow-y-auto">
      {/* empty items  */}
      <div className="flex flex-col bg-white m-4 p-4">
        <h2 className="text-2xl font-bold">Your Amazon cart is empty</h2>
        <span className="text-[#007185] cursor-pointer">
          Shop today's deals
        </span>

        <p className="text-sm ">
          Check your saved-for-later items below or
          <span className="text-[#007185] cursor-pointer">
            {" "}
            continue shopping.
          </span>
        </p>
      </div>
      {/*contain items */}
      <div className="bg-white m-4 p-4">
        {/* header before items */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-3xl">Shopping Cart</h2>
          <span className="text-[#007185] cursor-pointer">
            Deselect all items
          </span>
          <span className="flex justify-end mt-4">Price</span>
          <div className="h-px w-full bg-gray-500 mb-4"></div>
        </div>
        {/* item */}
        <div className="flex items-center maxmd:items-start flex-row maxmd:flex-col space-x-16 maxmd:space-x-0">
          {/* image */}
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="" id="" />
            <img
              width={200}
              height={200}
              src="https://m.media-amazon.com/images/G/42/cart/empty/kettle-desaturated._CB659190457_.svg"
              alt=""
            />
          </div>
          {/* details */}
          <div className="space-y-2 ">
            <div className="flex justify-between maxmd:mt-4">
              <p className="text-sm font-semibold w-3/4">
                Razer Viper V2 Pro HyperSpeed Wireless Gaming Mouse: 58g
                Ultra-Lightweight - Optical Switches Gen-3 - 30K Optical Sensor
                - On-Mouse DPI Controls - 80hr Battery - USB Type C Cable
                Included - Black
              </p>
              <span className="font-bold">$86.80</span>
            </div>
            <span className="block text-xs text-[#007600]">In stock</span>
            <div className="flex flex-row items-center">
              <input type="checkbox" name="" id="" />
              <p className="text-[12px] ml-2">
                This is a gift
                <span className="text-[#007185] cursor-pointer">
                  {" "}
                  Learn more
                </span>
              </p>
            </div>
            <span className="flex text-[12px]">
              <span className="text-black font-bold">Color:</span> Black
            </span>
            <div className="flex flex-row flex-wrap space-x-8 items-center text-[14px]">
              <div className="relative">
                <button className="border shadow-md py-px px-2 maxmd:mt-4">
                  Qty: 1
                </button>
              </div>
              <div className="h-4 w-px bg-gray-500 maxmd:mt-4"></div>
              <span className="text-[#007185] maxmd:mt-4 cursor-pointer">
                Delete
              </span>
              <div className="h-4 w-px bg-gray-500 maxmd:mt-4"></div>
              <span className="text-[#007185] maxmd:mt-4 cursor-pointer">
                Save for later
              </span>
              <div className="h-4 w-px bg-gray-500 maxmd:mt-4"></div>
              <span className="text-[#007185] maxmd:mt-4 cursor-pointer">
                Compare with similat items
              </span>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-500 my-12"></div>

        {/* item */}
        <div className="flex items-center maxmd:items-start flex-row maxmd:flex-col space-x-16 maxmd:space-x-0">
          {/* image */}
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="" id="" />
            <img
              width={200}
              height={200}
              src="https://m.media-amazon.com/images/G/42/cart/empty/kettle-desaturated._CB659190457_.svg"
              alt=""
            />
          </div>
          {/* details */}
          <div className="space-y-2 ">
            <div className="flex justify-between maxmd:mt-4">
              <p className="text-sm font-semibold w-3/4">
                Razer Viper V2 Pro HyperSpeed Wireless Gaming Mouse: 58g
                Ultra-Lightweight - Optical Switches Gen-3 - 30K Optical Sensor
                - On-Mouse DPI Controls - 80hr Battery - USB Type C Cable
                Included - Black
              </p>
              <span className="font-bold">$86.80</span>
            </div>
            <span className="block text-xs text-[#007600]">In stock</span>
            <div className="flex flex-row items-center">
              <input type="checkbox" name="" id="" />
              <p className="text-[12px] ml-2">
                This is a gift
                <span className="text-[#007185] cursor-pointer">
                  {" "}
                  Learn more
                </span>
              </p>
            </div>
            <span className="flex text-[12px]">
              <span className="text-black font-bold">Color:</span> Black
            </span>
            <div className="flex flex-row flex-wrap space-x-8 items-center text-[14px]">
              <div className="relative">
                <button className="border shadow-md py-px px-2 maxmd:mt-4">
                  Qty: 1
                </button>
              </div>
              <div className="h-4 w-px bg-gray-500 maxmd:mt-4"></div>
              <span className="text-[#007185] maxmd:mt-4 cursor-pointer">
                Delete
              </span>
              <div className="h-4 w-px bg-gray-500 maxmd:mt-4"></div>
              <span className="text-[#007185] maxmd:mt-4 cursor-pointer">
                Save for later
              </span>
              <div className="h-4 w-px bg-gray-500 maxmd:mt-4"></div>
              <span className="text-[#007185] maxmd:mt-4 cursor-pointer">
                Compare with similat items
              </span>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="h-px w-full bg-gray-500 my-12"></div>
        <div className="flex items-center justify-between mb-12">
          <button className="font bold bg-[#f9c449] rounded p-2">
            Process to ckeck out
          </button>
          <p className="font-bold">Subtotal (2 items): $226.79</p>
        </div>
      </div>

      {/* saved for later */}
      <div className="bg-white m-4 p-4">
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
                  Ultra-Lightweight - Optical Switches Gen-3 - 30K Optical
                  Sensor - On-Mouse DPI Controls - 80hr Battery - USB Type C
                  Cable Included - Black
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
            {/* item 2 */}
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
                  Ultra-Lightweight - Optical Switches Gen-3 - 30K Optical
                  Sensor - On-Mouse DPI Controls - 80hr Battery - USB Type C
                  Cable Included - Black
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
            {/* item 3 */}
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
                  Ultra-Lightweight - Optical Switches Gen-3 - 30K Optical
                  Sensor - On-Mouse DPI Controls - 80hr Battery - USB Type C
                  Cable Included - Black
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
            {/* item 4 */}
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
                  Ultra-Lightweight - Optical Switches Gen-3 - 30K Optical
                  Sensor - On-Mouse DPI Controls - 80hr Battery - USB Type C
                  Cable Included - Black
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
    </div>
  );
}

export default CartItems;
