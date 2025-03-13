import React from 'react'
import { statisticsDB } from '@/lib/data'
import StatisticCard from '@/components/common/cards/statisticCard'

function DashBoardStatisticContent() {
  return (
    <div className='py-10'>
        
        <div className='grid grid-cols-3 gap-10'>
            {statisticsDB.map((data,index)=>(
                <StatisticCard key={index} name={data.name} amount={data.amount} info={data.info} base={data.base}/>
            ))}
        </div>

        
    </div>
  )
}

export default DashBoardStatisticContent