import React from 'react'
import { leasingRights } from '@/lib/data'
import CoupleOfStepsCard from '@/components/common/cards/couple-of-section-card'

function UnlockOriginalContent() {
  return (
    <div className='mb-32'>
    <div className='flex flex-col items-center space-y-5 mb-14'>
        <h1 className='text-3xl font-monoBold'>Unlock Original Sound with Master Rights Leasing</h1>
        <p className='w-[55%] text-center text-[18px] font-bold'>Discover a world of unique, high-quality music for your projects. BeatBack offers artists the opportunity to lease their master recordings, granting you access
             to original tracks for a limited time. Choose the leasing option that best suits your needs.</p>

    </div>

          <div className='grid  grid-cols-1 lg:grid-cols-3 mx-52'>
             {
              leasingRights.map((item,index)=>(
                <CoupleOfStepsCard key={index} data={item} />

              ))
             }
             </div>
    </div>
  )
}

export default UnlockOriginalContent