import StatisticCard from '@/components/common/cards/statisticCard'
import { earningDB } from '@/lib/data'
import React from 'react'

function EarnstatisticContent() {
    return (
        <div className='py-10'>
            
            <div className='grid grid-cols-3 gap-10'>
                {earningDB.map((data,index)=>(
                    <StatisticCard key={index} name={data.name} amount={data.amount} info={data.info} base={data.base}/>
                ))}
            </div>
    
            
        </div>
      )
}

export default EarnstatisticContent