import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import words from "../../leng.json"


const EmptyCartItem = () => {

  const lengActive = useSelector(({leng})=> leng);
  const activeWords = words[`${lengActive.lang}`]

  // translated words 
  const cartEmpty = activeWords.cartEmpty;
  const checkYourItems = activeWords.checkYourItems;
  const continueShoopping = activeWords.continueShoopping;

  return (
    <div className="flex flex-col m-4 p-4">
      <h2 className="text-2xl font-bold">{cartEmpty}</h2>

      <p className="text-sm ">
        {checkYourItems}
        <Link to="/" className="text-[#007185] cursor-pointer">
          {continueShoopping}
        </Link>
      </p>
    </div>
  );
};

export default EmptyCartItem;
