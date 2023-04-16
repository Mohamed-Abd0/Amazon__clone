import React from "react";

const CartItemFooter = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <button className="font bold bg-[#f9c449] rounded p-2">
          Process to ckeck out
        </button>
        <p className="font-bold">Subtotal (2 items): $226.79</p>
      </div>
    </>
  );
};

export default CartItemFooter;
