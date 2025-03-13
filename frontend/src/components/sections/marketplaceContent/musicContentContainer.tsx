import { resultsMusic } from '@/lib/data'
import React from 'react'
import { Button } from '@/components/ui/button'
import MusicPlayerCard from '@/components/common/cards/musicPlayerCard'

function MusicContentContainer() {
  return (
    <div className='mx-5 w-full pb-10 p-5'>
        <div className='py-10'>
            <h1 className='text-5xl font-bold italic font-monoBold'>3,000 Results</h1>
        </div>

        <div className='grid grid-cols-3 gap-5 '>
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

export default MusicContentContainer