
import React from 'react'
import Image from 'next/image'


interface PurchaseHistoryProps {
  id: number;
  image: string;
  name: string;
  genre: string;
  date: string;
  duration: string;
}


function HistoryPurchase({id,image, name, genre, date, duration}:PurchaseHistoryProps) {
    return(
        <div className='flex items-center w-full gap-5 mb-5'>
            <div className='flex items-center gap-3 flex-1 min-w-0'>
                <h1>{id}</h1>
                <Image src={image} alt="" className='w-10 h-10 object-contain' width={20} height={20}/>
            </div>


        <div className="flex-1 min-w-0">
        <h1>{name}</h1>
      </div>

        <div className='flex-1 min-w-0 w-14 px-2 p-1  bg-[#274539]  border-4 rounded-full border-[#70d84d]'>
            <h1 className='text-center text-[#70d84d] font-bold'>{genre}</h1>
        </div>

        <div className="flex-1 min-w-0">
        <h1>{date} ETH</h1>
      </div>


      <div className="flex-1 min-w-0">
        <h1>{duration} years</h1>
      </div>


        </div>
    )
}

export default HistoryPurchase