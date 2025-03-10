import React from 'react'
import { IoInformationCircleOutline } from 'react-icons/io5'

function DashBoardFooter() {
  return (
    <div className='bg-[#252B36] w-full py-5 rounded-[10px]'>
    <div className='mx-5 space-y-5'>
    <div className='flex items-center gap-3'>
       <h1 className='text-[20px] font-bold text-[#A2A8B4] capitalize'>Last 30d transactions</h1>
       <IoInformationCircleOutline className='text-3xl text-[#A2A8B4]'/>
    </div>

      <div className="flex items-center justify-between">

        <div className='space-y-3'>
            <h1 className="text-3xl font-monoBold">5</h1>
            <h1 className='text-brand-brew text-3xl  font-bold'>Leases</h1>
        </div>

        <div className='space-y-3'>
             <h1 className="text-3xl font-monoBold">1</h1>
            <h1 className='text-brand-brew text-3xl  capitalize font-bold'>rights reserved</h1>
        </div>

        <div className='space-y-3'>
            <h1 className="text-3xl font-monoBold text-[#FFA500]">8</h1>
            <h1 className='text-brand-brew text-3xl  font-bold capitalize'>new uploads</h1>
        </div>

        <div className='space-y-3'>
            <h1 className="text-3xl font-monoBold text-[#32D74B]">$49285,00</h1>
            <h1 className='text-brand-brew text-3xl  font-bold capitalize'>earnings</h1>
        </div>
      </div>

        </div>
    </div>
  )
}

export default DashBoardFooter