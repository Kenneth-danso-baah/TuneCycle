import React from 'react'

import ChartA from './chartA'

function DashBoardCharts() {
  return (
        <div className='flex gap-10 py-10'>
            <div className='flex-[100%]  bg-[#252B36] rounded-[10px]'>
                <ChartA/>
            </div>

        </div>
  )
}

export default DashBoardCharts