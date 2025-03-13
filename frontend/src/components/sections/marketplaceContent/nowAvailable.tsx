import MusicPlayerCard from '@/components/common/cards/musicPlayerCard'
import { resultsMusic } from '@/lib/data'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from "react-icons/fa6";

function NowAvailableAgain() {
  return (
    <div className='my-10  w-full p-10 border-b border-brand-mouve'>
        <div className='mb-10 flex items-center justify-between'>
            <h1 className='text-3xl font-monoBold'>New Available</h1>

            <div className='flex items-center gap-5'>
                <div className='w-10 h-10 bg-transparent border border-brand-mouve flex justify-center items-center rounded-lg'>
                    <FaAngleLeft/>
                </div>

                <div className='w-10 h-10 bg-transparent border border-brand-mouve flex justify-center items-center rounded-lg'>
                    <FaAngleRight/>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-4  gap-10'>
            {resultsMusic.map((item, index)=>(
                <MusicPlayerCard
                key={index}
                 mainImage={item.mainImage} 
                 subImage={item.subImage}
                  title={item.title} 
                  artist={item.artist}
                price={item.price}
                state={item.state}
                 duration={item.duration} 
                 isNegotiable={item.isNegotiable}/>
             
            ))}
        </div>

    </div>
  )
}

export default NowAvailableAgain