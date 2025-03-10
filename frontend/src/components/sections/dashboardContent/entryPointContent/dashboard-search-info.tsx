import { RiArrowLeftSLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

function DashboardHeaderSearchInfo({dashboard_location}:{dashboard_location:string}) {
  return (
    <div className="flex items-center w-full gap-5">
        <div className='flex items-center gap-2 flex-[10%]'>
            <RiArrowLeftSLine className="text-3xl "/>
            <span className="font-monoBold text-[20px]">{dashboard_location}</span>
        </div>

        <div className=" flex items-center py-4 gap-5 px-5 bg-[#151718] rounded-[5px] flex-[80%]">
            <FiSearch className="text-2xl"/>
            <input type="text" placeholder="search uploaded songs" className="bg-transparent w-full outline-none placeholder:font-bold text-[18px] italic" />
        </div>

        <div className="flex-[10%] flex items-center gap-5">
            <div className="bg-[#151718] h-12 w-12 flex items-center justify-center rounded-full">
                <FaRegBell className="text-[20px]"/>
            </div>

            <RxAvatar className="text-4xl"/>

            <div className="flex items-center gap-3">
                <h1 className="font-bold text-[20px]">Anthony</h1>
                <MdKeyboardArrowDown className="text-3xl"/>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeaderSearchInfo