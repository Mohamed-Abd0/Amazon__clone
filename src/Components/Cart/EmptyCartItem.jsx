import React from "react";

const EmptyCartItem = () => {
  return (
    <div className="flex flex-col m-4 p-4">
      <h2 className="text-2xl font-bold">Your Amazon cart is empty</h2>
      <span className="text-[#007185] cursor-pointer">Shop today's deals</span>

      <p className="text-sm ">
        Check your saved-for-later items below or
        <span className="text-[#007185] cursor-pointer">
          {" "}
          continue shopping.
        </span>
      </p>
    </div>
  );
};

export default EmptyCartItem;
