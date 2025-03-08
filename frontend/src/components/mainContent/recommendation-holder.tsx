import React from 'react'
import RecommendationCard from '../common/cards/recommendation-card'
import { recommendationData } from '@/lib/data'

function RecommendationHolder() {
    return (
        <div className='p-5 lg:p-0 lg:leftRightSpacing flex flex-col  lg:flex-row  gap-10 mb-10 md:mb-32'>
            {recommendationData.map((item, index)=>{
              return(
                <RecommendationCard
                key={index}
                image={item.image}
                name={item.name}
                rating={item.rating}
                occupation={item.occuppation}
                opinion={item.opinion}
                />
              )
            })}
        </div>
      )
    
}

export default RecommendationHolder