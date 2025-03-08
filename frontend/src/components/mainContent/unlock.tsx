import React from 'react'
import ArrowTextLink from '../common/arrow-text-link'


function Unlock() {
  return (
    <div className='flex flex-col items-center space-y-5 mb-20 md:mb-32'>
            <h1 className='text-[20px] text-center  md:text-3xl font-monoBold'>Unlock the Perfect Sound for Your Project</h1>

        <p className='lg:max-w-[52%] text-center md:text-[18px] font-bold'>Whether you’re a producer, content creator, or  business, get access to top-tier music for the set period. With BeatBack, the rights to your favourite beats are just a few clicks away</p>
        <ArrowTextLink name='Buy now' href='/#'/>
    </div>
  )
}

export default Unlock