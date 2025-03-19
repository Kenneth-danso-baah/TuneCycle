import { hotSalesData } from "@/lib/data";
import React from "react";
import { FaEthereum } from "react-icons/fa";



function HotSales() {
  return (
    <div className="flex-1 bg-[#252B36] p-5 rounded-md">
        <div className="flex items-center justify-between py-5 text-[20px] ">
           <h1 className="font-poppins">Hot Sales</h1>
            <FaEthereum className="text-green-500"/>   
        </div>

      {/* Table Header */}
      <div className="flex items-center justify-between font-bold border-b border-gray-600 pb-2 mb-4">
        <h1 className="flex-1">Genre</h1>
        <h1 className="flex-1 text-center">Sold</h1>
        <h1 className="flex-1 text-right">Sales</h1>
      </div>


      {hotSalesData.map((data, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-2 border-b border-gray-600 last:border-b-0"
        >
          <h1 className="flex-1">{data.genre}</h1>
          <h1 className="flex-1 text-center">{data.sold}</h1>
          <h1 className="flex-1 text-right">{data.sales}</h1>
        </div>
      ))}
    </div>
  );
}

export default HotSales;