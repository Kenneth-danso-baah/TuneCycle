import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IoFilterSharp } from "react-icons/io5";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { PiUploadSimpleLight } from "react-icons/pi";



function SearchFilterColumn() {
  return (
   <div>    
        <div className=" flex items-center py-4 gap-5 px-5 bg-[#333945] rounded-[5px] ">
            <FiSearch className="text-2xl"/>
            <input type="text" placeholder="search" className="bg-transparent w-full outline-none placeholder:font-bold text-[18px] italic" />
        </div>


     </div>
 
  )
}

export default SearchFilterColumn