import { IoMdArrowDropdown } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";



const columnLayout ="grid grid-cols-[50px_200px_120px_150px_120px_200px_150px_120px_100px_50px] items-center py-4 border-b border-gray-300";

function TableTitle() {
    return (
     <div className="py-5">
      <div className={`${columnLayout} font-monoBold text-[16px] text-[#717A8C] capitalize`}>
        <div>#</div>
        <div>Songs</div>
        <div className="flex items-center gap-2">
          <h1>Genre</h1>
          <IoMdArrowDropdown />
        </div>
        <div>Uploaded on</div>
        <div>Status</div>
        <div className="flex items-center gap-2">
          <h1>Leased By</h1>
          <FiArrowUpRight />
        </div>
        <div className="flex items-center gap-1">
          <h1>Earnings</h1> ($)
        </div>
        <div>Leased Period</div>

      </div>
      </div>
    );
  }

export default TableTitle