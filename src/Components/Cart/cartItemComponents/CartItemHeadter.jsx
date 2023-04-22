import React from "react";
import TextSpan from "../../ReuseableComponets/TextSpan";

const CartItemHeadter = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2
          className="text-4xl"
          style={{ fontSize: "28px", fontWeight: 400, lineHeight: "36px" }}
        >
          Shopping Cart
        </h2>
        <TextSpan>Deselect all items</TextSpan>
        <span
          className="flex justify-end"
          style={{
            fontWeight: 350,
            color: "#565959",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          Price
        </span>
      </div>
    </>
  );
};

export default CartItemHeadter;
