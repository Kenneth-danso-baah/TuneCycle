import MusicPlayerCard from '@/components/common/cards/music-player-card'
import { Button } from '@/components/ui/button'
import { resultsMusic } from '@/lib/data'
import React from 'react'


function NewRelease() {
  return (
    <div className='my-10  w-full p-10 border-b border-brand-mouve '>
        <div className='mb-10'>
            <h1 className='text-3xl font-monoBold'>New Realease</h1>
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

        <div className='py-10 grid place-content-center'>
           <Button className='gradient-border-button text-[20px] font-bold py-7'>
           Load more
          </Button>
      </div>
      
    </div>
  )
}

export default NewRelease