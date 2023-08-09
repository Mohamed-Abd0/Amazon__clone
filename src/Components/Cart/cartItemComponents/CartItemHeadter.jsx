import React from "react";
import TextSpan from "../../ReuseableComponets/TextSpan";
import { useSelector, useDispatch } from "react-redux";
import { deselectAllCart } from "../../../Store/CartSlice";
import words from "../../../leng.json";

const CartItemHeadter = () => {
  const lengActive = useSelector(({ leng }) => leng);
  const activeWords = words[`${lengActive.lang}`];

  // translated words
  const shoppingCart = activeWords.shoppingCart;
  const deselectAllItems = activeWords.deselectAllItems;
  const price = activeWords.price;

  const dispatch = useDispatch();

  const deselectHandler = () => {
    dispatch(deselectAllCart());
  };

  return (
    <>
      <div className="flex flex-col">
        <h2
          className="text-4xl"
          style={{ fontSize: "28px", fontWeight: 400, lineHeight: "36px" }}
        >
          {shoppingCart}
        </h2>
        <TextSpan >
          <button onClick={deselectHandler}>{deselectAllItems}</button>
        </TextSpan>
        <span
          className="flex justify-end"
          style={{
            fontWeight: 350,
            color: "#565959",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          {price}
        </span>
      </div>
    </>
  );
};

export default CartItemHeadter;
