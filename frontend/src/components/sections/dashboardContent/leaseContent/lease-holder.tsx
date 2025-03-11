import LeasedCard from '@/components/common/cards/leased-card'
import React from 'react'

function LeaseHolder() {
  return (
    <div className='py-10'>
    <div className='pb-5'>
        <h1 className='text-3xl font-bold'>New Release</h1>
    </div>

    <div className='grid grid-cols-3 gap-10'>
    <LeasedCard/>
    <LeasedCard/>
    <LeasedCard/>

    </div>
</div>

  )
}

export default LeaseHolder