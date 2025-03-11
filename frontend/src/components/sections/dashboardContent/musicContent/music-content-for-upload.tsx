import { Dot } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

import { HiDotsHorizontal } from "react-icons/hi";
import { columnLayout } from '@/lib/data';

interface SongsIdProps{
    cover:string;
    songs:string;
    id:number;
    genre:string;
    uploaded_date:string;
    status:string;
    leased_by:string;
    earnings:string;
    lease_period:string;
    listeners:string;
    edit:string;

}
function MusicContentForUpload({cover,id,songs}:SongsIdProps) {
  return (
    <div className={`${columnLayout} font-bold text-[15px] `}>
    <div>{id}</div>
    <div className="flex items-center gap-3">
      <Image src={cover} alt="" width={30} height={30} />
      <h1>{songs}</h1>
    </div>

    <div className='w-14 px-2 p-1  bg-[#274539]  border-4 rounded-full border-[#70d84d]'>
        <h1 className='text-center text-[#70d84d] font-bold'>pop</h1>
    </div>
    <div>25.02.2014</div>
    <div>Leased</div>
    <div className="flex items-center gap-1">
      <Dot className="text-3xl text-blue-500" />
      <h1>Passion Records</h1>
    </div>
    <div>20.1M</div>
    <div>10y</div>
    <div>33.5K</div>
    <div>
      <HiDotsHorizontal />
    </div>
  </div>
  )
}

export default MusicContentForUpload