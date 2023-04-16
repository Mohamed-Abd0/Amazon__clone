import React from 'react'

const ProductData = ({mainImg, title, price}) => {
  return (
    <>
    <div className="flex items-center maxmd:items-start flex-row maxmd:flex-col space-x-16 maxmd:space-x-0">
    {/* image */}
    <div className="flex items-center space-x-4">
      <input type="checkbox" name="" id="" />
      {mainImg.map((img, idx) => (
        <img key={idx} width={200} height={200} src={img} alt="" />
      ))}
    </div>
    {/* details */}
    <div className="space-y-2 ">

      <div className="flex justify-between maxmd:mt-4">
        <p className="text-sm font-semibold w-3/4">{title}</p>
        <span className="font-bold">EGP{price}</span>
      </div>

      <span className="block text-xs text-[#007600]">In stock</span>
      <div className="flex flex-row items-center">
        <input type="checkbox" name="" id="" />
        <p className="text-[12px] ml-2">
          This is a gift
          <span className="text-[#007185] cursor-pointer"> Learn more</span>
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
    </>
  )
};

export default ProductData;
