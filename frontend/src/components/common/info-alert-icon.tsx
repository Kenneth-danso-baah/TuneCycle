import React from 'react'
import { IoInformationCircleOutline } from 'react-icons/io5'

function InfoAlertIcon({name}:{name:string}) {
  return (
         <div className='flex items-center gap-3 py-10'>
           <h1 className='text-[20px] font-bold text-[#A2A8B4] capitalize'>{name}</h1>
           <IoInformationCircleOutline className='text-[20px] text-[#A2A8B4]'/>
         </div>
  )
}

export default InfoAlertIcon