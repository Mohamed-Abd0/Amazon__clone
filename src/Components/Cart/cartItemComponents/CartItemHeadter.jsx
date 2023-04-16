import React from "react";
import TextSpan from "../../ReuseableComponets/TextSpan";

const CartItemHeadter = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-4xl" style={{ fontWeight: 400 }}>Shopping Cart</h2>
        <TextSpan>Deselect all items</TextSpan>
        <span className="flex justify-end"style={{ fontWeight: 350 , color: '#535151' }}>Price</span>
      </div>
    </>
  );
};

export default CartItemHeadter;
