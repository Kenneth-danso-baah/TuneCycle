import Summarycard from '@/components/common/cards/summary-card'
import React from 'react'

function Summary() {
  return (
    <div className='mt-5 pb-10'>

        <div className='mb-10'>
            <h1 className='text-3xl font-monoBold'>Summary</h1>
        </div>

        <div className='grid grid-cols-3 gap-10'>
            <Summarycard/>
            <Summarycard/>
            <Summarycard/>
            <Summarycard/>
            <Summarycard/>
            <Summarycard/>
        </div>

    </div>
  )
}

export default Summary