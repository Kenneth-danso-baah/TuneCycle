"use client"
import { useState } from "react";

function PriceRangeSlider() {
  const [price, setPrice] = useState(1);

  return (
    <div className="relative w-full flex flex-col items-center p-4">
   
      <div className="place-self-start mb-5">
        <h1 className="text-[20px] font-bold">Price Range</h1>
      </div>


      <div
        className="absolute -top-3 bg-white text-black font-bold px-3 py-1 text-nowrap text-sm shadow-md transition-all duration-200"
        style={{
          left: `calc(${(price - 1) * 11}% - 20px)`,
        }}
      >
        {price} ETH
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-8 border-l-transparent 
          border-r-8 border-r-transparent 
          border-t-8 border-t-white"
        ></div>
      </div>


      <input
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        className="w-full appearance-none h-3 rounded-[2px] cursor-pointer range-slider"
        style={{
          background: `linear-gradient(to right, #FFA500 ${(price - 1) * 11}%, #232638 ${(price - 1) * 11}%)`,
        }}
      />

   
      <div className="flex justify-between w-full text-[16px] font-bold mt-5">
        <span>1 ETH</span>
        <span>10 ETH</span>
      </div>

  
      <style>
        {`
          .range-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 22px;
            height: 22px;
            background: white;  /* Inner color */
            border: 4px solid #FFA500; /* Outer color */
            border-radius: 50%;   /* Circle shape */
            cursor: pointer;
            box-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
            transition: transform 0.2s ease;
          }

          .range-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2); /* Slightly bigger on hover */
          }

          .range-slider::-moz-range-thumb {
            width: 22px;
            height: 22px;
            background: white;  /* Inner color */
            border: 4px solid #FFA500; /* Outer color */
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
}

export default PriceRangeSlider;
