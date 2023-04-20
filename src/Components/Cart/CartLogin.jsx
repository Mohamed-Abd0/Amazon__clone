import React from 'react'

const CartLogin = () => {
  return (
    <div className="h-[100vh]">
      <div className="px-4 py-14 flex space-x-4 bg-white w-full">
        <div className="hidden">
          <img
            width={400}
            height={200}
            src="https://m.media-amazon.com/images/G/42/cart/empty/kettle-desaturated._CB659190457_.svg"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Your Amazon cart is empty</h2>
          <span className="text-[#007185] cursor-pointer">
            Shop today's deals
          </span>
          {/* if user not sign in */}
          <div className="space-y-4 space-x-4">
            <button className="bg-[#f9c449] p-2 rounded shadow-sm">
              sign in to your account
            </button>
            <button className="border p-2 shadow">sign up now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLogin