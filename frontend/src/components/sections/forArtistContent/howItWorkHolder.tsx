import IntroductionCard from '@/components/common/cards/introduction-card'
import { howItWorksItems } from '@/lib/data'
import React from 'react'


function HowItWorksHolder() {
  return (
    <div className='space-y-5 mb-32 leftRightSpacing'>
        <div>
            <h1 className='text-5xl font-monoBold uppercase mb-20'>how it works</h1>
        </div>

        <div className='flex gap-2'>
            {howItWorksItems.map((item,index)=>(
              <IntroductionCard key={index}
               title={item.title}
                image={item.image} 
                description={item.description}/>
            ))}
        </div>
    </div>
  )
}

export default HowItWorksHolder