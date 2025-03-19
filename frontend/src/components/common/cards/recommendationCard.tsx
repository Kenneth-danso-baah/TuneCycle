import React from 'react'
import Image from 'next/image'


interface RecommendationCardProps{
    image:string;
    name:string;
    occupation:string;
    rating:number;
    opinion:string;
}
function RecommendationCard({image,name,occupation,rating,opinion}:RecommendationCardProps) {
  return (
    <div className='w-full h-auto md:w[30%] bg-brand-rcc py-2 rounded-[10px]'>
      <div className='mx-5'>
        <div className='flex flex-row justify-between'>
          <Image src={image} alt="text" width={50} height={50}/>

          <div className='space-y-2'>
            <h1 className='text-[16px] md:text-2xl font-bold'>{name}</h1>
            <p className='text-center '>{occupation}</p>
          </div>

          <h1 className='text-[16px] md:text-[20px] font-bold'>{rating}</h1>
        </div>

        <div className='py-5 md:py-3'>
          <p className='font-bold text-[16px] md:text-[18px] md:leading-[2rem]'>{opinion}</p>
        </div>
      </div>
        
    </div>
  )
}

export default RecommendationCard