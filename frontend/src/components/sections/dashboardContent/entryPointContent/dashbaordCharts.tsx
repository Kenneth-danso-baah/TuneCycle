import React from 'react'

import ChartB from './chartB'
import ChartA from './chartA'

function DashBoardCharts() {
  return (
        <div className='flex gap-10 py-10'>
            <div className='flex-[60%]  bg-[#252B36] rounded-[10px]'>
                <ChartA/>
            </div>

            <div className='flex-[40%]  bg-[#252B36] rounded-[10px]'>
                <ChartB/>
            </div>
        </div>
  )
}

export default DashBoardCharts