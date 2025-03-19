import ArrowTextLink from '@/components/common/arrowTextLink'
import React from 'react'



function Unlock() {
  return (
    <div className='p-5 lg:p-0 flex flex-col items-center space-y-5 mb-20 md:mb-32'>
            <h1 className='text-[20px] text-center  md:text-3xl font-monoBold'>Unlock the Perfect Sound for Your Project</h1>

        <p className='lg:max-w-[52%] text-center md:text-[18px] font-bold'>Whether you’re a producer, content creator, or  business, get access to top-tier music for the set period. With BeatBack, the rights to your favourite beats are just a few clicks away</p>
        <ArrowTextLink name='Buy now' href='/#'/>
    </div>
  )
}

export default Unlock